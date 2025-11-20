const WhiteLabelQuery = require("../models/WhiteLabelQuery");

// Create a new white label query (public endpoint)
const createWhiteLabelQuery = async (req, res) => {
  try {
    const { demoId, demoSlug, name, email, company, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const query = await WhiteLabelQuery.create({
      demoId: demoId || undefined,
      demoSlug: demoSlug || undefined,
      name,
      email,
      company,
      phone,
      message,
    });

    res.status(201).send({
      success: true,
      message: "White label enquiry submitted successfully.",
      data: query,
    });
  } catch (error) {
    console.error("createWhiteLabelQuery error", error);
    res.status(500).send({
      success: false,
      message: error.message || "Something went wrong while saving enquiry.",
    });
  }
};

// List white label queries for admin (with basic filters)
const getWhiteLabelQueries = async (req, res) => {
  try {
    const { demoSlug, status, page = 1, limit = 20 } = req.query;

    const filters = {};
    if (demoSlug) filters.demoSlug = demoSlug;
    if (status) filters.status = status;

    const skip = (Number(page) - 1) * Number(limit);

    const [totalDoc, items] = await Promise.all([
      WhiteLabelQuery.countDocuments(filters),
      WhiteLabelQuery.find(filters)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
    ]);

    res.send({
      success: true,
      data: items,
      totalDoc,
      limit: Number(limit),
      page: Number(page),
    });
  } catch (error) {
    console.error("getWhiteLabelQueries error", error);
    res.status(500).send({
      success: false,
      message: error.message || "Failed to fetch white label responses.",
    });
  }
};

// Update status (admin)
const updateWhiteLabelStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).send({
        success: false,
        message: "Status is required.",
      });
    }

    const allowed = ["new", "in-progress", "closed"];
    if (!allowed.includes(status)) {
      return res.status(400).send({
        success: false,
        message: "Invalid status value.",
      });
    }

    const updated = await WhiteLabelQuery.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).send({
        success: false,
        message: "White label query not found.",
      });
    }

    res.send({
      success: true,
      message: "Status updated successfully.",
      data: updated,
    });
  } catch (error) {
    console.error("updateWhiteLabelStatus error", error);
    res.status(500).send({
      success: false,
      message: error.message || "Failed to update status.",
    });
  }
};

// Delete a white label query (admin)
const deleteWhiteLabelQuery = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await WhiteLabelQuery.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).send({
        success: false,
        message: "White label query not found.",
      });
    }

    res.send({
      success: true,
      message: "White label query deleted successfully.",
      data: deleted,
    });
  } catch (error) {
    console.error("deleteWhiteLabelQuery error", error);
    res.status(500).send({
      success: false,
      message: error.message || "Failed to delete white label query.",
    });
  }
};

module.exports = {
  createWhiteLabelQuery,
  getWhiteLabelQueries,
  updateWhiteLabelStatus,
  deleteWhiteLabelQuery,
};
