const mongoose = require('mongoose');

const blockedIPSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  reason: {
    type: String,
    required: true,
    enum: [
      'BRUTE_FORCE',
      'SQL_INJECTION',
      'XSS_ATTEMPT',
      'PORT_SCAN',
      'DDOS',
      'SUSPICIOUS_ACTIVITY',
      'CLONE_DETECTED',
      'API_ABUSE',
      'MANUAL_BLOCK'
    ]
  },
  severity: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'],
    default: 'MEDIUM'
  },
  blockedAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  expiresAt: {
    type: Date,
    required: true,
    index: true
  },
  attempts: {
    type: Number,
    default: 0
  },
  firstSeen: Date,
  lastSeen: Date,
  location: {
    country: String,
    city: String,
    latitude: Number,
    longitude: Number,
    isp: String
  },
  rules: [{
    ruleId: String,
    description: String,
    triggeredAt: Date,
    confidence: Number
  }],
  whitelisted: {
    type: Boolean,
    default: false
  },
  notes: String,
  blockedBy: {
    userId: mongoose.Schema.Types.ObjectId,
    email: String
  },
  unblockedAt: Date,
  unblockedBy: {
    userId: mongoose.Schema.Types.ObjectId,
    email: String
  },
  metadata: mongoose.Schema.Types.Mixed
}, {
  timestamps: true
});

// Indexes
blockedIPSchema.index({ expiresAt: 1 });
blockedIPSchema.index({ reason: 1, severity: 1 });
blockedIPSchema.index({ 'location.country': 1 });

// Methods
blockedIPSchema.methods.isBlocked = function() {
  return !this.unblockedAt && this.expiresAt > new Date();
};

blockedIPSchema.methods.extendBlock = function(days = 7) {
  this.expiresAt = new Date(Date.now() + days * 86400000);
  return this.save();
};

blockedIPSchema.methods.unblock = function(userId, email) {
  this.unblockedAt = new Date();
  this.unblockedBy = { userId, email };
  return this.save();
};

// Statics
blockedIPSchema.statics.getActiveBlocks = function() {
  const now = new Date();
  return this.find({
    $or: [
      { expiresAt: { $gt: now } },
      { expiresAt: null }
    ],
    unblockedAt: null
  }).sort({ blockedAt: -1 });
};

blockedIPSchema.statics.isIPBlocked = async function(ip) {
  const now = new Date();
  const block = await this.findOne({
    ip,
    $or: [
      { expiresAt: { $gt: now } },
      { expiresAt: null }
    ],
    unblockedAt: null
  });
  
  return !!block;
};

blockedIPSchema.statics.getBlockStats = async function() {
  const now = new Date();
  const oneDayAgo = new Date(now - 86400000);
  const oneWeekAgo = new Date(now - 604800000);

  return this.aggregate([
    {
      $facet: {
        totalBlocks: [{ $count: 'count' }],
        activeBlocks: [
          { $match: { 
            $or: [
              { expiresAt: { $gt: now } },
              { expiresAt: null }
            ],
            unblockedAt: null
          }},
          { $count: 'count' }
        ],
        byReason: [
          { $group: { _id: '$reason', count: { $sum: 1 } } }
        ],
        bySeverity: [
          { $group: { _id: '$severity', count: { $sum: 1 } } }
        ],
        recentBlocks: [
          { $match: { blockedAt: { $gte: oneDayAgo } } },
          { $count: 'count' }
        ],
        topCountries: [
          { $match: { 'location.country': { $ne: null } } },
          { $group: { _id: '$location.country', count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: 10 }
        ]
      }
    }
  ]);
};

module.exports = mongoose.model('BlockedIP', blockedIPSchema);