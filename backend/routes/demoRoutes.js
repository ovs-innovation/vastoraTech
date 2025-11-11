const express = require("express");
const router = express.Router();
const {
  addDemo,
  getAllDemos,
  getDemoById,
  getDemoBySlug,
  updateDemo,
  deleteDemo,
} = require("../controller/demoController");

//add a demo
router.post("/add", addDemo);

//get a demo by slug (for frontend) - must come before /:id
router.get("/slug/:slug", getDemoBySlug);

//get all demos (for admin with filters)
router.get("/", getAllDemos);

//get a demo by id - must come last to avoid route conflicts
router.get("/:id", getDemoById);

//update a demo
router.patch("/:id", updateDemo);

//delete a demo
router.delete("/:id", deleteDemo);

module.exports = router;

