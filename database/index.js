// database/index.js
const mongoose = require('mongoose');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

class DatabaseManager {
  constructor() {
    this.connection = null;
    this.isConnected = false;
    this.monitoringUrl = process.env.MONITORING_URL || 'http://localhost:3001';
    this.enabled = process.env.ENABLE_MONITORING === 'true';
    this.slowQueryThreshold = parseInt(process.env.SLOW_QUERY_THRESHOLD) || 100;
  }

  // តភ្ជាប់ទៅកាន់ MongoDB
  async connect() {
    try {
      const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/learning_platform';
      
      console.log('📊 Connecting to MongoDB...');
      
      this.connection = await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });

      this.isConnected = true;
      console.log('✅ MongoDB connected successfully');

      // កំណត់ monitoring
      this.setupMonitoring();
      
      // កំណត់ event listeners
      this.setupEventListeners();
      
      // តាមដាន performance
      this.monitorPerformance();
      
      return this.connection;
      
    } catch (error) {
      console.error('❌ MongoDB connection error:', error.message);
      this.isConnected = false;
      
      // ផ្ញើ alert ទៅកាន់ monitoring
      await this.sendAlertToMonitoring('DATABASE_CONNECTION_FAILED', error.message);
      
      throw error;
    }
  }

  // កំណត់ monitoring
  setupMonitoring() {
    if (!this.enabled) return;

    // Enable mongoose debug mode
    if (process.env.NODE_ENV === 'development') {
      mongoose.set('debug', (collectionName, method, query, doc) => {
        this.logQuery(collectionName, method, query);
      });
    }

    // Monitor slow queries
    const originalExec = mongoose.Query.prototype.exec;
    mongoose.Query.prototype.exec = async function() {
      const start = Date.now();
      const result = await originalExec.apply(this, arguments);
      const duration = Date.now() - start;
      
      if (duration > this.slowQueryThreshold) {
        await databaseManager.logSlowQuery(this, duration);
      }
      
      return result;
    };
  }

  // កំណត់ event listeners
  setupEventListeners() {
    mongoose.connection.on('connected', () => {
      console.log('MongoDB connected');
      this.sendHealthStatus('healthy');
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB error:', err);
      this.sendHealthStatus('unhealthy', err.message);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected');
      this.sendHealthStatus('disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      console.log('MongoDB reconnected');
      this.sendHealthStatus('reconnected');
    });
  }

  // តាមដាន performance
  monitorPerformance() {
    setInterval(async () => {
      if (!this.isConnected) return;

      try {
        const startTime = Date.now();
        await mongoose.connection.db.admin().ping();
        const responseTime = Date.now() - startTime;

        const stats = {
          timestamp: new Date().toISOString(),
          status: 'healthy',
          responseTime,
          connections: mongoose.connection.connections.length,
          readyState: mongoose.connection.readyState,
          collections: Object.keys(mongoose.connection.collections).length,
          models: Object.keys(mongoose.models).length
        };

        await this.sendToMonitoring('/api/health/database', stats);
        
        // ពិនិត្យ response time
        if (responseTime > 1000) {
          await this.sendAlertToMonitoring('SLOW_DATABASE_RESPONSE', `Response time: ${responseTime}ms`);
        }

      } catch (error) {
        await this.sendHealthStatus('unhealthy', error.message);
      }
    }, 60000); // រៀងរាល់ 1 នាទី
  }

  // កត់ត្រា query
  async logQuery(collection, operation, query) {
    if (!this.enabled) return;

    const logData = {
      timestamp: new Date().toISOString(),
      collection,
      operation,
      query: JSON.stringify(query).substring(0, 500),
      type: 'query'
    };

    await this.sendToMonitoring('/api/logs/database', logData);
  }

  // កត់ត្រា slow query
  async logSlowQuery(query, duration) {
    if (!this.enabled) return;

    const slowQueryData = {
      timestamp: new Date().toISOString(),
      query: query.getQuery(),
      operation: query.op,
      collection: query.model.modelName,
      duration,
      threshold: this.slowQueryThreshold,
      type: 'SLOW_QUERY'
    };

    await this.sendToMonitoring('/api/logs/slow-query', slowQueryData);
    
    // ផ្ញើ alert ប្រសិនបើ query យឺតពេក
    if (duration > 5000) {
      await this.sendAlertToMonitoring('VERY_SLOW_QUERY', 
        `Query on ${query.model.modelName} took ${duration}ms`);
    }
  }

  // កត់ត្រា database operation
  async logDatabaseOperation(operation, collection, data) {
    if (!this.enabled) return;

    const logData = {
      timestamp: new Date().toISOString(),
      operation,
      collection,
      data: JSON.stringify(data).substring(0, 500),
      type: 'operation'
    };

    await this.sendToMonitoring('/api/logs/database', logData);
  }

  // ផ្ញើ health status
  async sendHealthStatus(status, error = null) {
    if (!this.enabled) return;

    const healthData = {
      timestamp: new Date().toISOString(),
      status,
      error,
      connections: this.isConnected ? mongoose.connection.connections.length : 0,
      readyState: this.isConnected ? mongoose.connection.readyState : 0
    };

    await this.sendToMonitoring('/api/health/database', healthData);
  }

  // ផ្ញើ alert
  async sendAlertToMonitoring(type, message) {
    if (!this.enabled) return;

    const alertData = {
      timestamp: new Date().toISOString(),
      type,
      message,
      source: 'database',
      severity: type.includes('FAILED') || type.includes('VERY_SLOW') ? 'CRITICAL' : 'WARNING'
    };

    await this.sendToMonitoring('/api/alerts/database', alertData);
  }

  // ផ្ញើទិន្នន័យទៅកាន់ monitoring system
  async sendToMonitoring(endpoint, data) {
    try {
      await axios.post(`${this.monitoringUrl}${endpoint}`, data, {
        timeout: 5000,
        headers: {
          'X-Source': 'database',
          'X-API-Key': process.env.MONITORING_API_KEY || ''
        }
      });
    } catch (error) {
      // Silent fail - don't crash the database
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to send to monitoring:', error.message);
      }
    }
  }

  // បិទការតភ្ជាប់
  async disconnect() {
    try {
      await mongoose.disconnect();
      this.isConnected = false;
      console.log('MongoDB disconnected');
    } catch (error) {
      console.error('Error disconnecting MongoDB:', error.message);
    }
  }

  // ទទួលបាន statistics
  getStats() {
    return {
      isConnected: this.isConnected,
      readyState: this.isConnected ? mongoose.connection.readyState : 0,
      connections: this.isConnected ? mongoose.connection.connections.length : 0,
      models: Object.keys(mongoose.models).length,
      collections: this.isConnected ? Object.keys(mongoose.connection.collections).length : 0,
      monitoringEnabled: this.enabled,
      slowQueryThreshold: this.slowQueryThreshold
    };
  }

  // Backup database
  async backup() {
    try {
      const backupDir = path.join(__dirname, 'backups');
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = path.join(backupDir, `backup-${timestamp}`);

      // Get all collections
      const collections = Object.keys(mongoose.connection.collections);
      
      for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName];
        const data = await collection.find({}).toArray();
        const filePath = `${backupPath}-${collectionName}.json`;
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      }

      await this.logDatabaseOperation('BACKUP', 'all', { backupPath, collections });
      
      return { success: true, backupPath, collections };
    } catch (error) {
      console.error('Backup failed:', error);
      await this.sendAlertToMonitoring('BACKUP_FAILED', error.message);
      return { success: false, error: error.message };
    }
  }

  // Restore database
  async restore(backupPath) {
    try {
      const files = fs.readdirSync(backupPath);
      
      for (const file of files) {
        const collectionName = file.replace('.json', '').replace('backup-', '');
        const data = JSON.parse(fs.readFileSync(path.join(backupPath, file), 'utf8'));
        
        const collection = mongoose.connection.collections[collectionName];
        await collection.deleteMany({});
        if (data.length > 0) {
          await collection.insertMany(data);
        }
      }

      await this.logDatabaseOperation('RESTORE', 'all', { backupPath });
      
      return { success: true };
    } catch (error) {
      console.error('Restore failed:', error);
      await this.sendAlertToMonitoring('RESTORE_FAILED', error.message);
      return { success: false, error: error.message };
    }
  }
}

// Create singleton instance
const databaseManager = new DatabaseManager();

// Export models and database manager
module.exports = {
  databaseManager,
  mongoose,
  connectDB: () => databaseManager.connect(),
  disconnectDB: () => databaseManager.disconnect(),
  getDBStats: () => databaseManager.getStats()
};