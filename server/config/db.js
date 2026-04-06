const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const connectDB = async () => {
  try {
    // MongoDB connection options with security
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
      // Connection pool settings
      maxPoolSize: 10,
      minPoolSize: 2,
      
      // Socket timeout settings
      socketTimeoutMS: 30000,
      connectTimeoutMS: 10000,
      
      // Retry settings
      retryWrites: true,
      retryReads: true,
      
      // Security options
      authSource: 'admin',
      ssl: process.env.NODE_ENV === 'production',
      
      // Write concern
      writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 5000
      },
      
      // Read preference
      readPreference: 'primaryPreferred',
      
      // Enable debugging in development
      debug: process.env.NODE_ENV === 'development'
    };

    // Add SSL certificates in production
    if (process.env.NODE_ENV === 'production') {
      options.sslCA = fs.readFileSync(
        path.join(__dirname, '../../security/ssl/ca.pem')
      );
      options.sslCert = fs.readFileSync(
        path.join(__dirname, '../../security/ssl/client-cert.pem')
      );
      options.sslKey = fs.readFileSync(
        path.join(__dirname, '../../security/ssl/client-key.pem')
      );
    }

    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGODB_URI, options);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Set up connection event handlers
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      
      // Log to file
      fs.appendFileSync(
        path.join(__dirname, '../logs/mongo-error.log'),
        `[${new Date().toISOString()}] ${err.stack}\n`
      );
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected');
      
      // Attempt to reconnect
      setTimeout(() => {
        mongoose.connect(process.env.MONGODB_URI, options);
      }, 5000);
    });

    mongoose.connection.on('reconnected', () => {
      console.log('MongoDB reconnected');
    });

    // Enable query monitoring in development
    if (process.env.NODE_ENV === 'development') {
      mongoose.set('debug', (collectionName, method, query, doc) => {
        console.log(`MongoDB: ${collectionName}.${method}`, JSON.stringify(query));
      });
    }

    // Set up safe defaults
    mongoose.set('strictQuery', true);
    mongoose.set('sanitizeFilter', true);
    mongoose.set('autoIndex', false); // Disable auto-indexing in production

    return conn;

  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    
    // Log critical error
    fs.appendFileSync(
      path.join(__dirname, '../logs/critical.log'),
      `[${new Date().toISOString()}] MongoDB Connection Failed: ${error.stack}\n`
    );
    
    // Exit process on connection failure
    process.exit(1);
  }
};

// Graceful shutdown
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed through app termination');
  process.exit(0);
});

module.exports = connectDB;