// database/scripts/monitor.js
const { databaseManager } = require('../index');

async function monitorDatabase() {
  console.log('📊 Database Monitor');
  console.log('==================');
  
  const stats = databaseManager.getStats();
  
  console.log(`Connection Status: ${stats.isConnected ? '✅ Connected' : '❌ Disconnected'}`);
  console.log(`Ready State: ${stats.readyState}`);
  console.log(`Active Connections: ${stats.connections}`);
  console.log(`Total Models: ${stats.models}`);
  console.log(`Total Collections: ${stats.collections}`);
  console.log(`Monitoring Enabled: ${stats.monitoringEnabled ? '✅ Yes' : '❌ No'}`);
  console.log(`Slow Query Threshold: ${stats.slowQueryThreshold}ms`);
  
  if (!stats.isConnected) {
    console.log('\n⚠️ Database is not connected! Attempting to reconnect...');
    await databaseManager.connect();
  }
}

// Run monitor every 10 seconds if in watch mode
if (process.argv.includes('--watch')) {
  setInterval(monitorDatabase, 10000);
} else {
  monitorDatabase().then(() => process.exit(0));
}