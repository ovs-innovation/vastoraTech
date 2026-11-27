const mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: false,
      default: "E-commerce",
      trim: true,
    },
    link: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    mobileImage: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    description: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    tags: {
      type: [String],
      required: false,
      default: [],
    },
    client: {
      type: String,
      required: false,
      default: "",
      trim: true,
    },
    order: {
      type: Number,
      required: false,
      default: 0,
    },
    status: {
      type: String,
      enum: ["show", "hide"],
      default: "show",
    },
  },
  {
    timestamps: true,
  }
);

const Work = mongoose.models.Work || mongoose.model("Work", workSchema);

module.exports = Work;
