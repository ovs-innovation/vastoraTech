const express = require("express");
const {
  createContactSubmission,
  getContactSubmissions,
  updateContactStatus,
} = require("../controller/contactController");

const router = express.Router();

router.post("/contact-submissions", createContactSubmission);
router.get("/contact-submissions", getContactSubmissions);
router.patch("/contact-submissions/:id/status", updateContactStatus);

module.exports = router;
