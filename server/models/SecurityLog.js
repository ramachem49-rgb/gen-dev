const mongoose = require('mongoose');

const securityLogSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
    index: true
  },
  eventType: {
    type: String,
    required: true,
    enum: [
      'LOGIN_ATTEMPT',
      'LOGIN_SUCCESS',
      'LOGIN_FAILURE',
      'REGISTRATION',
      'PASSWORD_RESET',
      'ACCOUNT_LOCKED',
      'API_ACCESS',
      'RATE_LIMIT_EXCEEDED',
      'SUSPICIOUS_ACTIVITY',
      'SQL_INJECTION_ATTEMPT',
      'XSS_ATTEMPT',
      'PORT_SCAN',
      'DDOS_ATTEMPT',
      'CLONE_DETECTED',
      'DATABASE_CLONE_ATTEMPT',
      'FILE_UPLOAD',
      'ADMIN_ACTION',
      'PERMISSION_CHANGE',
      'USER_DELETED'
    ],
    index: true
  },
  severity: {
    type: String,
    enum: ['INFO', 'WARNING', 'ERROR', 'CRITICAL'],
    default: 'INFO',
    index: true
  },
  ip: {
    type: String,
    required: true,
    index: true
  },
  user: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    email: String,
    role: String
  },
  request: {
    method: String,
    url: String,
    headers: mongoose.Schema.Types.Mixed,
    body: mongoose.Schema.Types.Mixed,
    query: mongoose.Schema.Types.Mixed,
    params: mongoose.Schema.Types.Mixed,
    userAgent: String,
    referer: String
  },
  response: {
    statusCode: Number,
    responseTime: Number,
    size: Number
  },
  location: {
    country: String,
    city: String,
    latitude: Number,
    longitude: Number,
    timezone: String,
    isp: String
  },
  threat: {
    type: String,
    score: Number,
    confidence: Number,
    patterns: [String],
    rules: [String]
  },
  action: {
    type: String,
    result: String,
    details: String,
    duration: Number
  },
  metadata: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  },
  tags: [String],
  processed: {
    type: Boolean,
    default: false
  },
  notified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  capped: {
    size: 1024 * 1024 * 1024, // 1GB capped collection
    max: 1000000 // Maximum 1 million documents
  }
});

// Indexes for better query performance
securityLogSchema.index({ timestamp: -1 });
securityLogSchema.index({ 'user.userId': 1, timestamp: -1 });
securityLogSchema.index({ ip: 1, timestamp: -1 });
securityLogSchema.index({ eventType: 1, severity: 1, timestamp: -1 });
securityLogSchema.index({ 'threat.score': -1 });
securityLogSchema.index({ processed: 1, notified: 1 });

// Compound indexes for common queries
securityLogSchema.index({ eventType: 1, timestamp: -1, severity: 1 });
securityLogSchema.index({ ip: 1, eventType: 1, timestamp: -1 });
securityLogSchema.index({ 'location.country': 1, timestamp: -1 });

// TTL index for automatic cleanup (30 days)
securityLogSchema.index({ timestamp: 1 }, { expireAfterSeconds: 2592000 });

// Methods
securityLogSchema.methods.markProcessed = function() {
  this.processed = true;
  return this.save();
};

securityLogSchema.methods.markNotified = function() {
  this.notified = true;
  return this.save();
};

// Statics
securityLogSchema.statics.getRecentThreats = function(minutes = 60) {
  const cutoff = new Date(Date.now() - minutes * 60000);
  return this.find({
    timestamp: { $gte: cutoff },
    severity: { $in: ['ERROR', 'CRITICAL'] }
  }).sort({ timestamp: -1 });
};

securityLogSchema.statics.getThreatsByIP = function(ip, days = 7) {
  const cutoff = new Date(Date.now() - days * 86400000);
  return this.find({
    ip,
    timestamp: { $gte: cutoff }
  }).sort({ timestamp: -1 });
};

securityLogSchema.statics.getStats = async function() {
  const now = new Date();
  const oneHourAgo = new Date(now - 3600000);
  const oneDayAgo = new Date(now - 86400000);
  const oneWeekAgo = new Date(now - 604800000);

  const [
    total,
    lastHour,
    lastDay,
    lastWeek,
    bySeverity,
    byType
  ] = await Promise.all([
    this.countDocuments(),
    this.countDocuments({ timestamp: { $gte: oneHourAgo } }),
    this.countDocuments({ timestamp: { $gte: oneDayAgo } }),
    this.countDocuments({ timestamp: { $gte: oneWeekAgo } }),
    this.aggregate([
      { $match: { timestamp: { $gte: oneDayAgo } } },
      { $group: { _id: '$severity', count: { $sum: 1 } } }
    ]),
    this.aggregate([
      { $match: { timestamp: { $gte: oneDayAgo } } },
      { $group: { _id: '$eventType', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ])
  ]);

  return {
    total,
    lastHour,
    lastDay,
    lastWeek,
    bySeverity: bySeverity.reduce((acc, curr) => {
      acc[curr._id] = curr.count;
      return acc;
    }, {}),
    topEvents: byType
  };
};

module.exports = mongoose.model('SecurityLog', securityLogSchema);