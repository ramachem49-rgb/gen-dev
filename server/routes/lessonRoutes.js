const express = require('express');
const router = express.Router();
const sqlInjectionProtection = require('../middleware/advancedSqlInjection');
const inputValidator = require('../middleware/inputValidator');
const SafeQueryBuilder = require('../lib/queryBuilder');
const Lesson = require('../models/Lesson');

// Apply SQL injection protection to all routes
router.use(sqlInjectionProtection.detectInjection.bind(sqlInjectionProtection));

// Get all lessons with safe querying
router.get('/', async (req, res) => {
  try {
    const { language, level, search, page = 1, limit = 10 } = req.query;
    
    // Build safe query
    const queryBuilder = new SafeQueryBuilder(Lesson);
    
    // Add filters safely
    if (language && inputValidator.validate({ language }, { language: { validator: inputValidator.validationRules.language.validator } }).isValid) {
      queryBuilder.equals('language', language);
    }
    
    if (level && inputValidator.validate({ level }, { level: { validator: inputValidator.validationRules.level.validator } }).isValid) {
      queryBuilder.equals('level', level);
    }
    
    if (search) {
      // Sanitize search input
      const cleanSearch = inputValidator.sanitize({ search }).search;
      queryBuilder.regex('title', cleanSearch);
    }
    
    // Add pagination
    queryBuilder.paginate(page, limit);
    queryBuilder.sort('createdAt', 'desc');
    queryBuilder.populate('createdBy', 'name email');
    
    // Execute query safely
    const lessons = await queryBuilder.execute();
    const total = await queryBuilder.count();
    
    res.json({
      success: true,
      data: lessons,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: process.env.NODE_ENV === 'production' 
        ? 'Error fetching lessons' 
        : error.message
    });
  }
});

// Create lesson with validation
router.post('/', async (req, res) => {
  try {
    // Define validation rules
    const rules = {
      title: {
        required: true,
        validator: inputValidator.validationRules.title.validator,
        message: 'Invalid title',
        minLength: 3,
        maxLength: 100
      },
      description: {
        required: true,
        validator: (v) => v.length >= 10 && v.length <= 500,
        message: 'Description must be 10-500 characters',
        minLength: 10,
        maxLength: 500
      },
      language: {
        required: true,
        validator: inputValidator.validationRules.language.validator,
        message: 'Invalid language'
      },
      level: {
        required: true,
        validator: inputValidator.validationRules.level.validator,
        message: 'Invalid level'
      },
      videoUrl: {
        required: true,
        validator: inputValidator.validationRules.url.validator,
        message: 'Invalid video URL'
      }
    };
    
    // Sanitize input
    const sanitizedData = inputValidator.sanitize(req.body);
    
    // Validate input
    const validation = inputValidator.validate(sanitizedData, rules);
    
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        errors: validation.errors
      });
    }
    
    // Add user ID
    sanitizedData.createdBy = req.user.id;
    
    // Create lesson safely
    const lesson = await Lesson.create(sanitizedData);
    
    res.status(201).json({
      success: true,
      data: lesson
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: process.env.NODE_ENV === 'production' 
        ? 'Error creating lesson' 
        : error.message
    });
  }
});

module.exports = router;