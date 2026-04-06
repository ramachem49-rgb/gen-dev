const Lesson = require('../models/Lesson');
const path = require('path');
const fs = require('fs');

// @desc    Get all lessons
// @route   GET /api/lessons
// @access  Public
const getLessons = async (req, res) => {
  try {
    const { language, level, search } = req.query;
    let query = {};

    // Filter by language
    if (language) {
      query.language = language;
    }

    // Filter by level
    if (level) {
      query.level = level;
    }

    // Search by title or description
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const lessons = await Lesson.find(query)
      .populate('createdBy', 'name email')
      .sort('-createdAt');

    res.status(200).json({
      success: true,
      count: lessons.length,
      data: lessons
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get single lesson
// @route   GET /api/lessons/:id
// @access  Public
const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id)
      .populate('createdBy', 'name email');

    if (!lesson) {
      return res.status(404).json({
        success: false,
        error: 'Lesson not found'
      });
    }

    res.status(200).json({
      success: true,
      data: lesson
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Create lesson
// @route   POST /api/lessons
// @access  Private/Admin
const createLesson = async (req, res) => {
  try {
    // Add user to req.body
    req.body.createdBy = req.user.id;

    const lesson = await Lesson.create(req.body);

    res.status(201).json({
      success: true,
      data: lesson
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Update lesson
// @route   PUT /api/lessons/:id
// @access  Private/Admin
const updateLesson = async (req, res) => {
  try {
    let lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        success: false,
        error: 'Lesson not found'
      });
    }

    // Make sure user is lesson owner or admin
    if (lesson.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized'
      });
    }

    lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: lesson
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Delete lesson
// @route   DELETE /api/lessons/:id
// @access  Private/Admin
const deleteLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        success: false,
        error: 'Lesson not found'
      });
    }

    // Make sure user is lesson owner or admin
    if (lesson.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized'
      });
    }

    await lesson.deleteOne();

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

// @desc    Upload lesson image
// @route   POST /api/lessons/:id/image
// @access  Private/Admin
const uploadLessonImage = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        success: false,
        error: 'Lesson not found'
      });
    }

    // Make sure user is lesson owner or admin
    if (lesson.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized'
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'Please upload a file'
      });
    }

    // Update lesson with image filename
    lesson.image = req.file.filename;
    await lesson.save();

    res.status(200).json({
      success: true,
      data: {
        image: req.file.filename
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getLessons,
  getLessonById,
  createLesson,
  updateLesson,
  deleteLesson,
  uploadLessonImage
};