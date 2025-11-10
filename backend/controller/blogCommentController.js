const BlogComment = require('../models/BlogComment');
const Blog = require('../models/Blog');

// Create a blog comment (public, always starts pending)
exports.createComment = async (req, res) => {
  try {
    const { blogId, name, email, comment } = req.body;
    if (!blogId || !name || !email || !comment) {
      return res.status(400).send({ success: false, message: 'All fields are required.' });
    }
    // Optional: check if blog exists
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).send({ success: false, message: 'Blog not found' });
    const newComment = await BlogComment.create({ blogId, name, email, comment });
    res.status(201).send({ success: true, message: 'Comment submitted (pending approval)', data: newComment });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

// Get approved comments for a blog (public)
exports.getApprovedComments = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const comments = await BlogComment.find({ blogId, status: "approved" }).sort({ createdAt: -1 });
    res.send({ success: true, data: comments });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

// Approve a comment (admin)
exports.approveComment = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await BlogComment.findByIdAndUpdate(id, { status: 'approved' }, { new: true });
    if (!updated) return res.status(404).send({ success: false, message: 'Comment not found' });
    res.send({ success: true, message: 'Comment approved', data: updated });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

// (Optional) Reject/delete a comment (admin)
exports.deleteComment = async (req, res) => {
  try {
    const id = req.params.id;
    await BlogComment.findByIdAndDelete(id);
    res.send({ success: true, message: 'Comment deleted' });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

// Admin: get all comments in the system
exports.getAllComments = async (req, res) => {
  try {
    const comments = await BlogComment.find({})
      .sort({ createdAt: -1 })
      .populate({ path: 'blogId', select: 'title slug' });
    res.send({ success: true, data: comments });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};
