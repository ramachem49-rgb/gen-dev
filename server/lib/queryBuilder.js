const mongoose = require('mongoose');
const mongoProtection = require('../middleware/mongoProtection');

class SafeQueryBuilder {
  constructor(model) {
    this.model = model;
    this.query = {};
    this.options = {};
    this.populates = [];
  }

  // Safe where clause
  where(field, operator, value) {
    // Validate field name
    if (!this.isValidField(field)) {
      throw new Error(`Invalid field name: ${field}`);
    }

    // Validate and sanitize value
    value = this.sanitizeValue(value);

    // Build safe query
    if (!this.query[field]) {
      this.query[field] = {};
    }

    if (this.isAllowedOperator(operator)) {
      this.query[field][operator] = value;
    } else {
      throw new Error(`Invalid operator: ${operator}`);
    }

    return this;
  }

  // Safe equals
  equals(field, value) {
    return this.where(field, '$eq', value);
  }

  // Safe in array
  in(field, values) {
    if (!Array.isArray(values)) {
      throw new Error('Values must be an array');
    }
    return this.where(field, '$in', values);
  }

  // Safe regex (limited)
  regex(field, pattern, options = 'i') {
    // Sanitize regex pattern
    pattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Only allow simple text search
    if (pattern.length > 100) {
      throw new Error('Search pattern too long');
    }

    this.query[field] = { $regex: pattern, $options: options };
    return this;
  }

  // Add pagination
  paginate(page = 1, limit = 10) {
    page = Math.max(1, parseInt(page));
    limit = Math.min(100, Math.max(1, parseInt(limit)));
    
    this.options.skip = (page - 1) * limit;
    this.options.limit = limit;
    
    return this;
  }

  // Add sorting
  sort(field, direction = 'asc') {
    if (!this.isValidField(field)) {
      throw new Error(`Invalid sort field: ${field}`);
    }
    
    this.options.sort = { [field]: direction === 'asc' ? 1 : -1 };
    return this;
  }

  // Add population
  populate(path, select = '') {
    if (!this.isValidField(path)) {
      throw new Error(`Invalid populate path: ${path}`);
    }
    
    this.populates.push({ path, select });
    return this;
  }

  // Execute query safely
  async execute() {
    try {
      // Final query sanitization
      const safeQuery = mongoProtection.protectQuery(this.query);
      
      // Build mongoose query
      let dbQuery = this.model.find(safeQuery);
      
      // Apply options
      if (this.options.skip) dbQuery = dbQuery.skip(this.options.skip);
      if (this.options.limit) dbQuery = dbQuery.limit(this.options.limit);
      if (this.options.sort) dbQuery = dbQuery.sort(this.options.sort);
      
      // Apply population
      for (const pop of this.populates) {
        dbQuery = dbQuery.populate(pop.path, pop.select);
      }
      
      // Execute
      const results = await dbQuery.lean().exec();
      
      // Sanitize results
      return this.sanitizeResults(results);
    } catch (error) {
      throw new Error(`Query execution failed: ${error.message}`);
    }
  }

  // Get count
  async count() {
    const safeQuery = mongoProtection.protectQuery(this.query);
    return await this.model.countDocuments(safeQuery);
  }

  // Validate field name
  isValidField(field) {
    // Field names cannot contain operators
    if (field.startsWith('$')) return false;
    
    // Field names cannot contain dots (for now)
    if (field.includes('.')) return false;
    
    return true;
  }

  // Check if operator is allowed
  isAllowedOperator(op) {
    const allowed = ['$eq', '$gt', '$gte', '$in', '$lt', '$lte', '$ne', '$nin'];
    return allowed.includes(op);
  }

  // Sanitize value
  sanitizeValue(value) {
    if (typeof value === 'string') {
      // Remove null bytes
      value = value.replace(/\0/g, '');
      
      // Limit string length
      if (value.length > 1000) {
        value = value.substring(0, 1000);
      }
    }
    
    if (Array.isArray(value)) {
      value = value.map(v => this.sanitizeValue(v));
    }
    
    return value;
  }

  // Sanitize results
  sanitizeResults(results) {
    if (Array.isArray(results)) {
      return results.map(r => this.sanitizeResult(r));
    }
    return this.sanitizeResult(results);
  }

  sanitizeResult(result) {
    if (!result || typeof result !== 'object') return result;

    const sanitized = {};
    
    for (const [key, value] of Object.entries(result)) {
      // Remove internal MongoDB fields
      if (key.startsWith('__')) continue;
      
      if (typeof value === 'string') {
        // Escape any remaining HTML
        sanitized[key] = this.escapeHTML(value);
      } else if (value && typeof value === 'object') {
        sanitized[key] = this.sanitizeResult(value);
      } else {
        sanitized[key] = value;
      }
    }
    
    return sanitized;
  }

  escapeHTML(str) {
    const htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return str.replace(/[&<>"']/g, char => htmlEscapes[char]);
  }
}

module.exports = SafeQueryBuilder;