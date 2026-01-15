const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
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
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    images: {
      type: Array,
      required: false,
    },
    featuredImage: {
      type: String,
      required: false,
    },
    video: {
      type: Boolean,
      default: false,
    },
    videoUrl: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: true,
    },
    authorAvatar: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
    },
    excerpt: {
      type: String,
      required: false,
    },
    metaTitle: {
      type: String,
      required: false,
    },
    metaDescription: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      default: "published",
      enum: ["published", "draft", "archived"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    readTime: {
      type: Number,
      default: 0,
    },
    faqs: [
      {
        question: {
          type: String,
          required: false,
        },
        answer: {
          type: String,
          required: false,
        },
      },
    ],
    publishedAt: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create index for slug
blogSchema.index({ slug: 1 });

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;

