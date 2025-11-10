const BlogCategory = require("../models/BlogCategory");

const toSlug = (text) =>
  String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const createCategory = async (req, res) => {
  try {
    const { name, description, status } = req.body;
    const slug = req.body.slug || toSlug(name);
    const category = await BlogCategory.create({ name, description, status, slug });
    res.status(201).send({ success: true, message: "Category created", data: category });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const data = await BlogCategory.find({}).sort({ createdAt: -1 });
    res.send({ success: true, data });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

const getPublicCategories = async (_req, res) => {
  try {
    const data = await BlogCategory.find({ status: "active" }).sort({ name: 1 });
    res.send({ success: true, data });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name, description, status } = req.body;
    const update = { name, description, status };
    if (name) update.slug = toSlug(name);
    const updated = await BlogCategory.findByIdAndUpdate(req.params.id, update, { new: true });
    res.send({ success: true, message: "Category updated", data: updated });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await BlogCategory.deleteOne({ _id: req.params.id });
    res.send({ success: true, message: "Category deleted" });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getPublicCategories,
  updateCategory,
  deleteCategory,
};


