const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    images: {
      type: [String],
      required: false,
      default: [],
    },
    demoUrl: {
      type: String,
      required: false,
    },
    adminDemoUrl: {
      type: String,
      required: false,
    },
    featuresOverview: {
      type: mongoose.Schema.Types.Mixed,
      required: false,
      default: {},
    },
    featuresList: {
      type: [String],
      required: false,
      default: [],
    },
    features: {
      type: [String],
      required: false,
      default: [],
    },
    technologies: {
      type: [String],
      required: false,
      default: [],
    },
    specifications: {
      type: mongoose.Schema.Types.Mixed,
      required: false,
      default: {},
    },
    status: {
      type: String,
      default: "published",
      enum: ["published", "draft", "archived"],
    },
  },
  {
    timestamps: true,
  }
);

// Create index for slug
demoSchema.index({ slug: 1 });

const Demo = mongoose.model("Demo", demoSchema);
module.exports = Demo;

