const ContactSubmission = require("../models/ContactSubmission");

const allowedStatusValues = ["new", "in-progress", "resolved"];

const createContactSubmission = async (req, res) => {
  try {
    const { fullName, email, subject, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return res.status(400).send({
        success: false,
        message: "Full name, email, subject and message are required.",
      });
    }

    const submission = await ContactSubmission.create({
      fullName,
      email,
      subject,
      message,
      meta: {
        ipAddress: req.ip,
        userAgent: req.headers["user-agent"],
      },
    });

    res.status(201).send({
      success: true,
      message: "Thank you! Your message has been received.",
      data: submission,
    });
  } catch (error) {
    console.error("createContactSubmission error", error);
    res.status(500).send({
      success: false,
      message: error.message || "Failed to submit contact form.",
    });
  }
};

const getContactSubmissions = async (req, res) => {
  try {
    const {
      status,
      search,
      page = 1,
      limit = 20,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    const filters = {};
    if (status) filters.status = status;

    if (search) {
      const regex = new RegExp(search, "i");
      filters.$or = [
        { fullName: regex },
        { email: regex },
        { subject: regex },
      ];
    }

    const sortConfig = {
      [sortBy]: sortOrder === "asc" ? 1 : -1,
    };

    const skip = (Number(page) - 1) * Number(limit);

    const [totalDoc, items] = await Promise.all([
      ContactSubmission.countDocuments(filters),
      ContactSubmission.find(filters)
        .sort(sortConfig)
        .skip(skip)
        .limit(Number(limit)),
    ]);

    res.send({
      success: true,
      data: items,
      page: Number(page),
      limit: Number(limit),
      totalDoc,
    });
  } catch (error) {
    console.error("getContactSubmissions error", error);
    res.status(500).send({
      success: false,
      message: error.message || "Failed to fetch contact submissions.",
    });
  }
};

const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    if (!status || !allowedStatusValues.includes(status)) {
      return res.status(400).send({
        success: false,
        message: "Invalid or missing status.",
      });
    }

    const updatePayload = {
      status,
    };

    if (notes !== undefined) {
      updatePayload.notes = notes;
    }

    if (status === "resolved") {
      updatePayload.respondedAt = new Date();
      if (req.user?._id) {
        updatePayload.respondedBy = req.user._id;
      }
    }

    const updated = await ContactSubmission.findByIdAndUpdate(
      id,
      updatePayload,
      { new: true }
    );

    if (!updated) {
      return res.status(404).send({
        success: false,
        message: "Contact submission not found.",
      });
    }

    res.send({
      success: true,
      message: "Status updated successfully.",
      data: updated,
    });
  } catch (error) {
    console.error("updateContactStatus error", error);
    res.status(500).send({
      success: false,
      message: error.message || "Failed to update status.",
    });
  }
};

module.exports = {
  createContactSubmission,
  getContactSubmissions,
  updateContactStatus,
};
