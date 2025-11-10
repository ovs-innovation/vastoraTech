const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  getPublicCategories,
  updateCategory,
  deleteCategory,
} = require("../controller/blogCategoryController");

// Admin routes
router.post("/", createCategory);
router.get("/", getAllCategories);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

// Public
router.get("/public", getPublicCategories);

module.exports = router;


