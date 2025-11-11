const Demo = require("../models/Demo");

const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const generateUniqueSlug = async (title, excludeId = null) => {
  const baseSlug = slugify(title) || "demo";
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const query = { slug };
    if (excludeId) {
      query._id = { $ne: excludeId };
    }
    const existing = await Demo.findOne(query).lean();
    if (!existing) {
      break;
    }
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }

  return slug;
};

const addDemo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).send({
        success: false,
        message: "Title is required",
      });
    }

    const slug = await generateUniqueSlug(title);

    const newDemo = new Demo({
      ...req.body,
      slug,
    });

    await newDemo.save();
    res.status(201).send({
      success: true,
      message: "Demo created successfully",
      data: newDemo,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const getAllDemos = async (req, res) => {
  const { title, category, page, limit } = req.query;

  let queryObject = {};

  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }

  if (category) {
    queryObject.category = { $regex: category, $options: "i" };
  }

  const pages = Number(page) || 1;
  const limits = Number(limit) || 10;
  const skip = (pages - 1) * limits;

  try {
    const totalDoc = await Demo.countDocuments(queryObject);

    const demos = await Demo.find(queryObject)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limits);

    res.send({
      success: true,
      demos,
      data: demos,
      totalDoc,
      limits,
      pages,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const getDemoById = async (req, res) => {
  try {
    const demo = await Demo.findById(req.params.id);
    if (!demo) {
      return res.status(404).send({
        success: false,
        message: "Demo not found",
      });
    }
    res.send({
      success: true,
      demo,
      data: demo,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const getDemoBySlug = async (req, res) => {
  try {
    const demo = await Demo.findOne({ slug: req.params.slug });
    if (!demo) {
      return res.status(404).send({
        success: false,
        message: "Demo not found",
      });
    }
    res.send({
      success: true,
      demo,
      data: demo,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const updateDemo = async (req, res) => {
  try {
    const updates = { ...req.body };
    if (updates.title) {
      updates.slug = await generateUniqueSlug(updates.title, req.params.id);
    }

    const demo = await Demo.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });
    if (!demo) {
      return res.status(404).send({
        success: false,
        message: "Demo not found",
      });
    }
    res.send({
      success: true,
      message: "Demo updated successfully",
      data: demo,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const deleteDemo = async (req, res) => {
  try {
    const demo = await Demo.findByIdAndDelete(req.params.id);
    if (!demo) {
      return res.status(404).send({
        success: false,
        message: "Demo not found",
      });
    }
    res.send({
      success: true,
      message: "Demo deleted successfully",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  addDemo,
  getAllDemos,
  getDemoById,
  getDemoBySlug,
  updateDemo,
  deleteDemo,
};

