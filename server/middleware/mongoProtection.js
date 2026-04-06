const mongoose = require('mongoose');

class MongoProtection {
  constructor() {
    this.blockedOperators = [
      '$where',
      '$function',
      '$accumulator',
      '$expr',
      '$jsonSchema',
      '$mod',
      '$regex',
      '$options',
      '$text',
      '$search'
    ];

    this.dangerousFunctions = [
      'eval',
      'Function',
      'setTimeout',
      'setInterval',
      'constructor'
    ];
  }

  // Sanitize MongoDB queries
  sanitizeQuery(query) {
    if (!query || typeof query !== 'object') return query;

    const sanitized = Array.isArray(query) ? [] : {};

    for (const [key, value] of Object.entries(query)) {
      // Block dangerous operators
      if (this.blockedOperators.includes(key)) {
        throw new Error(`Invalid query operator: ${key}`);
      }

      // Recursively sanitize nested objects
      if (value && typeof value === 'object') {
        sanitized[key] = this.sanitizeQuery(value);
      } else {
        sanitized[key] = value;
      }
    }

    return sanitized;
  }

  // Validate input against schema
  validateAgainstSchema(schema, data, path = '') {
    const errors = [];

    for (const [field, value] of Object.entries(data)) {
      const schemaField = schema.path(field);
      
      if (!schemaField && field !== '__v' && !field.startsWith('$')) {
        // Field not in schema - possible injection
        errors.push(`Unknown field: ${field}`);
        continue;
      }

      if (schemaField) {
        // Check data type
        const expectedType = schemaField.instance;
        const actualType = this.getType(value);

        if (expectedType !== 'Mixed' && actualType !== expectedType.toLowerCase()) {
          errors.push(`Field ${field} should be ${expectedType}, got ${actualType}`);
        }

        // Check for JavaScript code
        if (typeof value === 'string' && this.containsJavaScript(value)) {
          errors.push(`Field ${field} contains JavaScript code`);
        }
      }
    }

    return errors;
  }

  // Get JavaScript type
  getType(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
  }

  // Check if string contains JavaScript
  containsJavaScript(str) {
    const jsPatterns = [
      /function\s*\(/i,
      /=>/,
      /eval\s*\(/i,
      /new\s+Function/i,
      /setTimeout\s*\(/i,
      /setInterval\s*\(/i,
      /document\./i,
      /window\./i,
      /alert\s*\(/i,
      /console\./i
    ];

    return jsPatterns.some(pattern => pattern.test(str));
  }

  // Protect against NoSQL injection in query
  protectQuery(query) {
    if (!query) return query;

    // Remove $where clauses
    if (query.$where) {
      delete query.$where;
    }

    // Sanitize $expr
    if (query.$expr) {
      delete query.$expr;
    }

    // Sanitize $function
    if (query.$function) {
      delete query.$function;
    }

    // Recursively process all fields
    for (const key in query) {
      if (typeof query[key] === 'object' && query[key] !== null) {
        // Check for operator injection
        if (key.startsWith('$')) {
          if (!this.isAllowedOperator(key)) {
            delete query[key];
          }
        } else {
          query[key] = this.protectQuery(query[key]);
        }
      }
    }

    return query;
  }

  // Check if MongoDB operator is allowed
  isAllowedOperator(op) {
    const allowedOperators = [
      '$eq', '$gt', '$gte', '$in', '$lt', '$lte', '$ne', '$nin',
      '$and', '$not', '$nor', '$or',
      '$exists', '$type',
      '$all', '$elemMatch', '$size'
    ];

    return allowedOperators.includes(op);
  }
}

module.exports = new MongoProtection();