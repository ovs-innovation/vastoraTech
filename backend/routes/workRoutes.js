const express = require("express");
const router = express.Router();
const {
  addWork,
  getAllWorks,
  getWorkById,
  updateWork,
  deleteWork,
  updateManyWorks,
  uploadWorkImage,
} = require("../controller/workController");

// Upload an image directly
router.post("/upload", uploadWorkImage);

// Add a new work
router.post("/add", addWork);

// Update many works (bulk status)
router.patch("/update/many", updateManyWorks);

// Get all works
router.get("/", getAllWorks);

// Get a work by id
router.get("/:id", getWorkById);

// Update a work
router.patch("/:id", updateWork);

// Delete a work
router.delete("/:id", deleteWork);

module.exports = router;
