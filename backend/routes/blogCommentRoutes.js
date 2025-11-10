const express = require('express');
const router = express.Router();
const blogCommentController = require('../controller/blogCommentController');
// const { isAdmin } = require('../config/auth'); // Uncomment if you have admin middleware

// Get all comments (admin, unfiltered)
router.get('/', blogCommentController.getAllComments);

// Post a new blog comment
router.post('/', blogCommentController.createComment);

// Get all APPROVED comments for a blog
router.get('/:blogId', blogCommentController.getApprovedComments);

// Approve a comment (admin)
router.patch('/:id/approve', /*isAdmin,*/ blogCommentController.approveComment);

// Delete a comment (admin)
router.delete('/:id', /*isAdmin,*/ blogCommentController.deleteComment);

module.exports = router;
