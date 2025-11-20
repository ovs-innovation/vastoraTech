const mongoose = require("mongoose");

const whiteLabelQuerySchema = new mongoose.Schema(
  {
    demoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Demo",
      required: false,
    },
    demoSlug: {
      type: String,
      required: false,
      index: true,
    },
    name: {
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
    company: {
      type: String,
      required: false,
      trim: true,
    },
    phone: {
      type: String,
      required: false,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["new", "in-progress", "closed"],
      default: "new",
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

whiteLabelQuerySchema.index({ createdAt: -1 });

const WhiteLabelQuery = mongoose.model("WhiteLabelQuery", whiteLabelQuerySchema);

module.exports = WhiteLabelQuery;
