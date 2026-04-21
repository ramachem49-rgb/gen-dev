const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/learning_platform';

  const options =
    process.env.NODE_ENV === 'production'
      ? {
          maxPoolSize: 10,
          minPoolSize: 2,
          socketTimeoutMS: 30000,
          connectTimeoutMS: 10000,
          retryWrites: true,
          retryReads: true,
        }
      : {
          // Development — minimal options, no auth/ssl
          maxPoolSize: 5,
          socketTimeoutMS: 30000,
          connectTimeoutMS: 10000,
          retryWrites: true,
        };

  try {
    mongoose.set('strictQuery', true);
    mongoose.set('sanitizeFilter', true);

    const conn = await mongoose.connect(uri, options);
    console.log(`✅ MongoDB Connected: ${conn.connection.host} / ${conn.connection.name}`);

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB error:', err.message);
      fs.appendFileSync(
        path.join(logsDir, 'mongo-error.log'),
        `[${new Date().toISOString()}] ${err.stack}\n`
      );
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️  MongoDB disconnected — retrying in 5s...');
      setTimeout(() => connectDB(), 5000);
    });

    mongoose.connection.on('reconnected', () => {
      console.log('✅ MongoDB reconnected');
    });

    return conn;
  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    fs.appendFileSync(
      path.join(logsDir, 'critical.log'),
      `[${new Date().toISOString()}] MongoDB Connection Failed: ${error.stack}\n`
    );
    console.warn('⚠️  Retrying in 10s...');
    setTimeout(() => connectDB(), 10000);
  }
};

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});

module.exports = connectDB;
