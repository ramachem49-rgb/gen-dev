const databaseHeaders = (req, res, next) => {
  // Prevent database schema exposure
  res.setHeader('X-Database-Engine', 'Unknown');
  
  // Prevent version disclosure
  res.setHeader('X-MongoDB-Version', '');
  
  // Add security headers for database responses
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // Remove headers that might reveal database info
  const removeHeaders = [
    'X-Powered-By',
    'Server',
    'X-MongoDB-Response'
  ];
  
  removeHeaders.forEach(header => {
    res.removeHeader(header);
  });
  
  // Override json method to sanitize database errors
  const originalJson = res.json;
  res.json = function(data) {
    // Remove any database error details in production
    if (process.env.NODE_ENV === 'production' && data.error) {
      if (data.error.includes('MongoError') || 
          data.error.includes('MongoDB') ||
          data.error.includes('database')) {
        data.error = 'Database error occurred';
      }
    }
    
    return originalJson.call(this, data);
  };
  
  next();
};

module.exports = databaseHeaders;