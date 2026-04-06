const Message = require('../models/Message');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email and message'
      });
    }

    // Create message
    const contactMessage = await Message.create({
      name,
      email,
      message
    });

    res.status(201).json({
      success: true,
      data: {
        id: contactMessage._id,
        name: contactMessage.name,
        email: contactMessage.email,
        message: contactMessage.message,
        createdAt: contactMessage.createdAt
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get all messages (Admin only)
// @route   GET /api/contact
// @access  Private/Admin
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort('-createdAt');
    
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Delete message (Admin only)
// @route   DELETE /api/contact/:id
// @access  Private/Admin
const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        error: 'Message not found'
      });
    }

    await message.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  submitContact,
  getMessages,
  deleteMessage
};