const express = require("express");
const router = express.Router();
const {
  addBlog,
  createBlog,
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
} = require("../controller/blogController");

//add a blog
router.post("/add", addBlog);

// support POST / for reference code
router.post("/", createBlog);

//add multiple blogs
router.post("/all", addAllBlogs);

//get published blogs only (for frontend) - must come before /:id
router.get("/published/all", getPublishedBlogs);

//get a blog by slug (for frontend) - must come before /:id
router.get("/slug/:slug", getBlogBySlug);

// public tag suggestions
router.get("/public/tags", async (_req, res) => {
  try {
    const Blog = require("../models/Blog");
    const docs = await Blog.find({ status: "published" }).select("tags").limit(1000);
    const tagSet = new Set();
    docs.forEach((d) => (d.tags || []).forEach((t) => t && tagSet.add(String(t).toLowerCase())));
    res.send({ success: true, data: Array.from(tagSet) });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
});

//get all blogs (for admin with filters)
router.get("/", getAllBlogs);

//get a blog by id - must come last to avoid route conflicts
router.get("/:id", getBlogById);

//update a blog
router.patch("/:id", updateBlog);

//update many blogs
router.patch("/update/many", updateManyBlogs);

//update a blog status
router.put("/status/:id", updateStatus);

//delete a blog
router.delete("/:id", deleteBlog);

//delete many blogs
router.patch("/delete/many", deleteManyBlogs);

module.exports = router;

