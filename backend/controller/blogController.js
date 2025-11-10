const Blog = require("../models/Blog");

const addBlog = async (req, res) => {
  try {
    const newBlog = new Blog({
      ...req.body,
      publishedAt: req.body.status === "published" ? new Date() : null,
    });

    await newBlog.save();
    res.status(201).send({
      success: true,
      message: "Blog created successfully",
      data: newBlog,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const addAllBlogs = async (req, res) => {
  try {
    await Blog.deleteMany();
    await Blog.insertMany(req.body);
    res.status(200).send({
      success: true,
      message: "Blogs added successfully!",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const getAllBlogs = async (req, res) => {
  const { title, category, status, page, limit, search, sortBy, sortOrder } = req.query;

  let queryObject = {};
  let sortObject = {};

  // Search functionality
  if (search) {
    queryObject.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
      { author: { $regex: search, $options: "i" } },
    ];
  }

  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }

  if (category) {
    queryObject.category = { $regex: category, $options: "i" };
  }

  if (status) {
    queryObject.status = status;
  }

  // Sorting
  if (sortBy) {
    const order = sortOrder === "asc" ? 1 : -1;
    sortObject[sortBy] = order;
  } else {
    sortObject = { createdAt: -1 };
  }

  const pages = Number(page) || 1;
  const limits = Number(limit) || 10;
  const skip = (pages - 1) * limits;

  try {
    const totalDoc = await Blog.countDocuments(queryObject);

    const blogs = await Blog.find(queryObject)
      .sort(sortObject)
      .skip(skip)
      .limit(limits);

    res.send({
      success: true,
      blogs,
      data: blogs, // for compatibility with reference
      totalDoc,
      limits,
      pages,
      pagination: {
        totalBlogs: totalDoc,
        page: pages,
        limit: limits,
      },
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const getPublishedBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: "published" })
      .sort({ createdAt: -1 })
      .limit(100);
    res.send({
      success: true,
      data: blogs,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.send({
      success: true,
      data: blog,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    // Increment views only for published blogs
    if (blog.status === "published") {
      blog.views += 1;
      await blog.save();
    }

    res.send({
      success: true,
      data: blog,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    // Update publishedAt if status changed to published
    if (req.body.status === "published" && blog.status !== "published") {
      req.body.publishedAt = new Date();
    }

    Object.assign(blog, req.body);
    await blog.save();

    res.send({
      success: true,
      message: "Blog updated successfully!",
      data: blog,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const updateManyBlogs = async (req, res) => {
  try {
    const updatedData = {};
    for (const key of Object.keys(req.body)) {
      if (
        req.body[key] !== "[]" &&
        Object.entries(req.body[key]).length > 0 &&
        req.body[key] !== req.body.ids
      ) {
        updatedData[key] = req.body[key];
      }
    }

    await Blog.updateMany(
      { _id: { $in: req.body.ids } },
      {
        $set: updatedData,
      },
      {
        multi: true,
      }
    );
    res.send({
      success: true,
      message: "Blogs updated successfully!",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const updateStatus = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    const newStatus = req.body.status;
    blog.status = newStatus;

    // Update publishedAt if status changed to published
    if (newStatus === "published" && !blog.publishedAt) {
      blog.publishedAt = new Date();
    }

    await blog.save();

    res.status(200).send({
      success: true,
      message: `Blog ${newStatus} successfully!`,
      data: blog,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    await Blog.deleteOne({ _id: req.params.id });
    res.status(200).send({
      success: true,
      message: "Blog deleted successfully!",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const deleteManyBlogs = async (req, res) => {
  try {
    await Blog.deleteMany({ _id: { $in: req.body.ids } });
    res.send({
      success: true,
      message: "Blogs deleted successfully!",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  addBlog,
  // alias for POST / to match reference
  createBlog: addBlog,
  addAllBlogs,
  getAllBlogs,
  getPublishedBlogs,
  getBlogById,
  getBlogBySlug,
  updateBlog,
  updateManyBlogs,
  updateStatus,
  deleteBlog,
  deleteManyBlogs,
};

