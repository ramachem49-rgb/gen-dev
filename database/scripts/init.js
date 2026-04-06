// database/scripts/init.js
const { databaseManager } = require('../index');
const models = require('../models');

async function initializeDatabase() {
  try {
    console.log('🔧 Initializing database...');
    
    // Connect to database
    await databaseManager.connect();
    
    // Create indexes
    await createIndexes();
    
    // Create default admin user if not exists
    await createDefaultAdmin();
    
    console.log('✅ Database initialization completed');
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  }
}

async function createIndexes() {
  console.log('📇 Creating indexes...');
  
  // User indexes
  await models.User.collection.createIndex({ email: 1 }, { unique: true });
  await models.User.collection.createIndex({ createdAt: -1 });
  
  // Lesson indexes
  await models.Lesson.collection.createIndex({ language: 1, level: 1 });
  await models.Lesson.collection.createIndex({ createdAt: -1 });
  await models.Lesson.collection.createIndex({ title: 'text', description: 'text' });
  
  // SecurityLog indexes
  await models.SecurityLog.collection.createIndex({ timestamp: -1 });
  await models.SecurityLog.collection.createIndex({ eventType: 1, severity: 1 });
  await models.SecurityLog.collection.createIndex({ ip: 1, timestamp: -1 });
  
  // BlockedIP indexes
  await models.BlockedIP.collection.createIndex({ ip: 1 }, { unique: true });
  await models.BlockedIP.collection.createIndex({ expiresAt: 1 });
  
  console.log('✅ Indexes created');
}

async function createDefaultAdmin() {
  const bcrypt = require('bcryptjs');
  
  const adminExists = await models.User.findOne({ email: 'admin@example.com' });
  
  if (!adminExists) {
    console.log('👤 Creating default admin user...');
    
    const hashedPassword = await bcrypt.hash('Admin@123456', 10);
    
    await models.User.create({
      name: 'System Administrator',
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'admin'
    });
    
    console.log('✅ Default admin created');
    console.log('   Email: admin@example.com');
    console.log('   Password: Admin@123456');
    console.log('   ⚠️ Please change this password after first login!');
  }
}

// Run if called directly
if (require.main === module) {
  initializeDatabase();
}

module.exports = { initializeDatabase };