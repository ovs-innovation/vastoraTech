const mongoose = require("mongoose");

const contactSubmissionSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    website: {
      type: String,
      trim: true,
      default: "",
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    hearAboutUs: {
      type: String,
      trim: true,
      default: "",
    },
    subject: {
      type: String,
      trim: true,
      default: "Website Inquiry",
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["new", "in-progress", "resolved"],
      default: "new",
    },
    notes: {
      type: String,
      trim: true,
    },
    respondedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      default: null,
    },
    respondedAt: {
      type: Date,
    },
    meta: {
      ipAddress: String,
      userAgent: String,
    },
  },
  { timestamps: true }
);

contactSubmissionSchema.index({ email: 1, createdAt: -1 });
contactSubmissionSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model("ContactSubmission", contactSubmissionSchema);
