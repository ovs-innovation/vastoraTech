const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    emailId: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    businessName: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    location: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    service: {
      type: String,
      required: false,
      trim: true,
      default: "other",
    },
    customService: {
      type: String,
      required: false,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "converted", "lost"],
      default: "new",
    },
    source: {
      type: String,
      required: false,
      trim: true,
      default: "website",
    },
    notes: {
      type: String,
      required: false,
      trim: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
leadSchema.index({ emailId: 1 });
leadSchema.index({ phoneNumber: 1 });
leadSchema.index({ status: 1 });
leadSchema.index({ createdAt: -1 });

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead; 