const Lead = require("../models/Lead");
const { sendEmail } = require("../lib/email-sender/sender");

// Create a new lead
const createLead = async (req, res) => {
  try {
    const {
      name,
      emailId,
      phoneNumber,
      businessName,
      location,
      service,
      customService,
      source,
      notes,
    } = req.body;

    // Check if lead already exists with same email or phone
    const existingLead = await Lead.findOne({
      $or: [{ emailId }, { phoneNumber }],
    });

    if (existingLead) {
      return res.status(400).json({
        success: false,
        message: "Lead with this email or phone number already exists",
      });
    }

    const lead = new Lead({
      name,
      emailId,
      phoneNumber,
      businessName: businessName || "",
      location: location || "",
      service: service || "other",
      customService: customService || "",
      source: source || "website",
      notes: notes || "",
    });

    const savedLead = await lead.save();

    // Send notification email to admin (optional)
    if (process.env.ADMIN_EMAIL) {
      const emailBody = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: "New Lead Generated",
        html: `
          <h2>New Lead Generated</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${emailId}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Business:</strong> ${businessName || "N/A"}</p>
          <p><strong>Location:</strong> ${location || "N/A"}</p>
          <p><strong>Service:</strong> ${service || "other"}</p>
          <p><strong>Custom Service:</strong> ${customService || "N/A"}</p>
          <p><strong>Source:</strong> ${source || "website"}</p>
          <p><strong>Notes:</strong> ${notes || "N/A"}</p>
        `,
      };

      try {
        await sendEmail(emailBody, res, "Lead notification sent");
      } catch (emailError) {
        console.error("Email notification failed:", emailError);
      }
    }

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: savedLead,
    });
  } catch (error) {
    console.error("Error creating lead:", error);
    res.status(500).json({
      success: false,
      message: "Error creating lead",
      error: error.message,
    });
  }
};

// Get all leads with pagination and filtering
const getAllLeads = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      source,
      search,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    const query = { isActive: true };

    // Filter by status
    if (status) {
      query.status = status;
    }

    // Filter by source
    if (source) {
      query.source = source;
    }

    // Search functionality
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { emailId: { $regex: search, $options: "i" } },
        { phoneNumber: { $regex: search, $options: "i" } },
        { businessName: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

    const leads = await Lead.find(query)
      .populate("assignedTo", "name email")
      .sort(sortOptions)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Lead.countDocuments(query);

    res.status(200).json({
      success: true,
      data: leads,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalLeads: total,
        hasNextPage: page * limit < total,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching leads",
      error: error.message,
    });
  }
};

// Get lead by ID
const getLeadById = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await Lead.findById(id).populate("assignedTo", "name email");

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    console.error("Error fetching lead:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching lead",
      error: error.message,
    });
  }
};

// Update lead
const updateLead = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Remove fields that shouldn't be updated
    delete updateData.emailId; // Email should not be changed
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const lead = await Lead.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).populate("assignedTo", "name email");

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead updated successfully",
      data: lead,
    });
  } catch (error) {
    console.error("Error updating lead:", error);
    res.status(500).json({
      success: false,
      message: "Error updating lead",
      error: error.message,
    });
  }
};

// Delete lead (soft delete)
const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await Lead.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting lead:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting lead",
      error: error.message,
    });
  }
};

// Get lead statistics
const getLeadStats = async (req, res) => {
  try {
    const stats = await Lead.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    const totalLeads = await Lead.countDocuments({ isActive: true });
    const todayLeads = await Lead.countDocuments({
      isActive: true,
      createdAt: {
        $gte: new Date(new Date().setHours(0, 0, 0, 0)),
      },
    });

    const statsObject = {
      total: totalLeads,
      today: todayLeads,
      byStatus: {},
    };

    stats.forEach((stat) => {
      statsObject.byStatus[stat._id] = stat.count;
    });

    res.status(200).json({
      success: true,
      data: statsObject,
    });
  } catch (error) {
    console.error("Error fetching lead stats:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching lead statistics",
      error: error.message,
    });
  }
};

// Bulk update leads
const bulkUpdateLeads = async (req, res) => {
  try {
    const { leadIds, updateData } = req.body;

    if (!leadIds || !Array.isArray(leadIds) || leadIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Lead IDs array is required",
      });
    }

    const result = await Lead.updateMany(
      { _id: { $in: leadIds } },
      updateData
    );

    res.status(200).json({
      success: true,
      message: `${result.modifiedCount} leads updated successfully`,
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("Error bulk updating leads:", error);
    res.status(500).json({
      success: false,
      message: "Error bulk updating leads",
      error: error.message,
    });
  }
};

module.exports = {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead,
  getLeadStats,
  bulkUpdateLeads,
}; 