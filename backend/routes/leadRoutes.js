const express = require("express");
const router = express.Router();
const {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead,
  getLeadStats,
  bulkUpdateLeads,
} = require("../controller/leadController");
const { isAuth, isAdmin } = require("../config/auth");

// Public route for creating leads (no authentication required)
router.post("/", createLead);

// Protected routes (require authentication)
router.get("/", getAllLeads);
router.get("/stats", isAuth, getLeadStats);
router.get("/:id", isAuth, getLeadById);
router.put("/:id", isAuth, updateLead);
router.delete("/:id", isAuth, deleteLead);
router.put("/bulk/update", isAuth, bulkUpdateLeads);

module.exports = router; 