const express = require('express');
const router = express.Router();
const {
  submitContact,
  getMessages,
  deleteMessage
} = require('../controllers/contactController');
const { protect, admin } = require('../middleware/authMiddleware');

// Public route
router.post('/', submitContact);

// Admin routes
router.get('/', protect, admin, getMessages);
router.delete('/:id', protect, admin, deleteMessage);

module.exports = router;