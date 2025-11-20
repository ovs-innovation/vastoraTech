const express = require("express");
const {
  createWhiteLabelQuery,
  getWhiteLabelQueries,
  updateWhiteLabelStatus,
  deleteWhiteLabelQuery,
} = require("../controller/whiteLabelController");

const router = express.Router();

// Public endpoint for website form submissions
router.post("/white-label-queries", createWhiteLabelQuery);

// Admin endpoints (you can later add auth middleware here)
router.get("/white-label-queries", getWhiteLabelQueries);
router.patch("/white-label-queries/:id/status", updateWhiteLabelStatus);
router.delete("/white-label-queries/:id", deleteWhiteLabelQuery);

module.exports = router;
