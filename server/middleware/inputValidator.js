const validator = require('validator');

class InputValidator {
  constructor() {
    this.validationRules = {
      email: {
        validator: validator.isEmail,
        message: 'Invalid email format'
      },
      name: {
        validator: (value) => {
          return /^[a-zA-Z\s\-']{2,50}$/.test(value);
        },
        message: 'Name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes'
      },
      password: {
        validator: (value) => {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
        },
        message: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
      },
      message: {
        validator: (value) => {
          return value.length >= 10 && value.length <= 1000 && !/<script|javascript:|onerror=/i.test(value);
        },
        message: 'Message must be 10-1000 characters and cannot contain scripts'
      },
      title: {
        validator: (value) => {
          return value.length >= 3 && value.length <= 100 && !/[<>{}]/.test(value);
        },
        message: 'Title must be 3-100 characters and cannot contain HTML tags'
      },
      url: {
        validator: validator.isURL,
        message: 'Invalid URL format'
      },
      language: {
        validator: (value) => {
          const validLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'Rust', 'TypeScript', 'Other'];
          return validLanguages.includes(value);
        },
        message: 'Invalid programming language'
      },
      level: {
        validator: (value) => {
          return ['Beginner', 'Intermediate', 'Advanced'].includes(value);
        },
        message: 'Invalid difficulty level'
      }
    };
  }

  // Validate input against rules
  validate(input, rules) {
    const errors = [];

    for (const [field, rule] of Object.entries(rules)) {
      const value = input[field];

      // Check required fields
      if (rule.required && (value === undefined || value === null || value === '')) {
        errors.push(`${field} is required`);
        continue;
      }

      // Skip if value not provided and not required
      if (value === undefined || value === null || value === '') {
        continue;
      }

      // Apply validators
      if (rule.validator) {
        const isValid = rule.validator(value);
        if (!isValid) {
          errors.push(rule.message || `Invalid ${field}`);
        }
      }

      // Check type
      if (rule.type && typeof value !== rule.type) {
        errors.push(`${field} must be of type ${rule.type}`);
      }

      // Check min/max length for strings
      if (typeof value === 'string') {
        if (rule.minLength && value.length < rule.minLength) {
          errors.push(`${field} must be at least ${rule.minLength} characters`);
        }
        if (rule.maxLength && value.length > rule.maxLength) {
          errors.push(`${field} must be at most ${rule.maxLength} characters`);
        }
      }

      // Check for XSS
      if (typeof value === 'string' && this.containsXSS(value)) {
        errors.push(`${field} contains prohibited characters`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Check for XSS patterns
  containsXSS(value) {
    const xssPatterns = [
      /<script/i,
      /javascript:/i,
      /onerror=/i,
      /onload=/i,
      /onclick=/i,
      /onmouseover=/i,
      /eval\(/i,
      /document\./i,
      /window\./i,
      /alert\(/i,
      /confirm\(/i,
      /prompt\(/i,
      /<iframe/i,
      /<embed/i,
      /<object/i,
      /<svg/i,
      /<img/i,
      /<body/i,
      /<link/i,
      /<meta/i,
      /<style/i,
      /<applet/i,
      /<form/i,
      /<input/i,
      /<button/i
    ];

    return xssPatterns.some(pattern => pattern.test(value));
  }

  // Sanitize input
  sanitize(input) {
    if (!input || typeof input !== 'object') return input;

    const sanitized = Array.isArray(input) ? [] : {};

    for (const [key, value] of Object.entries(input)) {
      // Skip if key contains suspicious patterns
      if (this.containsXSS(key)) {
        continue;
      }

      if (typeof value === 'string') {
        // Remove null bytes
        let cleaned = value.replace(/\0/g, '');
        
        // Escape HTML
        cleaned = this.escapeHTML(cleaned);
        
        // Trim whitespace
        cleaned = cleaned.trim();
        
        sanitized[key] = cleaned;
      } else if (value && typeof value === 'object') {
        sanitized[key] = this.sanitize(value);
      } else {
        sanitized[key] = value;
      }
    }

    return sanitized;
  }

  // Escape HTML special characters
  escapeHTML(str) {
    const htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '`': '&#96;'
    };

    return str.replace(/[&<>"'`]/g, char => htmlEscapes[char]);
  }

  // Create validation schema
  createSchema(rules) {
    return {
      validate: (data) => this.validate(data, rules),
      sanitize: (data) => this.sanitize(data)
    };
  }
}

module.exports = new InputValidator();