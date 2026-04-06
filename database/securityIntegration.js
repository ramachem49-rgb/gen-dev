// database/securityIntegration.js
const mongoose = require('mongoose');
const axios = require('axios');

class DatabaseSecurityIntegration {
  constructor() {
    this.monitoringUrl = process.env.MONITORING_URL || 'http://localhost:3001';
    this.enabled = process.env.ENABLE_MONITORING === 'true';
  }

  // តាមដាន database queries
  async logDatabaseQuery(operation, collection, query, duration) {
    if (!this.enabled) return;

    const logData = {
      timestamp: new Date().toISOString(),
      operation,
      collection,
      query: JSON.stringify(query),
      duration,
      timestamp: new Date().toISOString()
    };

    try {
      await axios.post(`${this.monitoringUrl}/api/logs/database`, logData);
    } catch (error) {
      // Silent fail
    }
  }

  // ពិនិត្យមើល database performance
  async checkDatabaseHealth() {
    try {
      const startTime = Date.now();
      await mongoose.connection.db.admin().ping();
      const responseTime = Date.now() - startTime;

      const healthData = {
        timestamp: new Date().toISOString(),
        status: 'healthy',
        responseTime,
        connections: mongoose.connection.connections.length,
        readyState: mongoose.connection.readyState
      };

      await axios.post(`${this.monitoringUrl}/api/health/database`, healthData);
      return true;
    } catch (error) {
      const errorData = {
        timestamp: new Date().toISOString(),
        status: 'unhealthy',
        error: error.message
      };
      await axios.post(`${this.monitoringUrl}/api/health/database`, errorData);
      return false;
    }
  }

  // តាមដាន slow queries
  async logSlowQuery(query, duration, threshold = 100) {
    if (duration > threshold) {
      const slowQueryData = {
        timestamp: new Date().toISOString(),
        query: query,
        duration,
        threshold,
        type: 'SLOW_QUERY'
      };
      await axios.post(`${this.monitoringUrl}/api/logs/slow-query`, slowQueryData);
    }
  }
}

module.exports = new DatabaseSecurityIntegration();