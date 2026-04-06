const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  severity: {
    type: String,
    enum: ['INFO', 'WARNING', 'ERROR', 'CRITICAL'],
    required: true,
    index: true
  },
  category: {
    type: String,
    enum: [
      'SECURITY',
      'SYSTEM',
      'DATABASE',
      'NETWORK',
      'APPLICATION',
      'USER',
      'COMPLIANCE'
    ],
    required: true,
    index: true
  },
  source: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    index: true
  },
  affected: {
    users: [mongoose.Schema.Types.ObjectId],
    ips: [String],
    resources: [String]
  },
  metadata: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  },
  status: {
    type: String,
    enum: ['NEW', 'ACKNOWLEDGED', 'IN_PROGRESS', 'RESOLVED', 'IGNORED'],
    default: 'NEW',
    index: true
  },
  acknowledgedBy: {
    userId: mongoose.Schema.Types.ObjectId,
    email: String,
    at: Date
  },
  resolvedBy: {
    userId: mongoose.Schema.Types.ObjectId,
    email: String,
    at: Date,
    resolution: String
  },
  notifications: [{
    channel: {
      type: String,
      enum: ['EMAIL', 'SMS', 'DISCORD', 'SLACK', 'WEBHOOK']
    },
    sentAt: Date,
    status: String,
    error: String
  }],
  actions: [{
    type: {
      type: String,
      enum: ['BLOCK_IP', 'LOCK_USER', 'SCAN', 'BACKUP', 'NOTIFY']
    },
    performedAt: Date,
    result: String,
    performedBy: String
  }],
  expiresAt: {
    type: Date,
    index: true
  },
  tags: [String]
}, {
  timestamps: true
});

// Indexes
alertSchema.index({ createdAt: -1 });
alertSchema.index({ status: 1, severity: 1, createdAt: -1 });
alertSchema.index({ 'affected.ips': 1 });
alertSchema.index({ 'affected.users': 1 });

// TTL index for resolved alerts (30 days)
alertSchema.index({ resolvedAt: 1 }, { expireAfterSeconds: 2592000 });

// Methods
alertSchema.methods.acknowledge = function(userId, email) {
  this.status = 'ACKNOWLEDGED';
  this.acknowledgedBy = {
    userId,
    email,
    at: new Date()
  };
  return this.save();
};

alertSchema.methods.resolve = function(userId, email, resolution) {
  this.status = 'RESOLVED';
  this.resolvedBy = {
    userId,
    email,
    at: new Date(),
    resolution
  };
  return this.save();
};

alertSchema.methods.addNotification = function(channel, status, error = null) {
  this.notifications.push({
    channel,
    sentAt: new Date(),
    status,
    error
  });
  return this.save();
};

alertSchema.methods.addAction = function(type, result, performedBy) {
  this.actions.push({
    type,
    performedAt: new Date(),
    result,
    performedBy
  });
  return this.save();
};

// Statics
alertSchema.statics.getActiveAlerts = function(severity = null) {
  const query = {
    status: { $in: ['NEW', 'ACKNOWLEDGED', 'IN_PROGRESS'] }
  };
  
  if (severity) {
    query.severity = severity;
  }
  
  return this.find(query).sort({ severity: 1, createdAt: -1 });
};

alertSchema.statics.getAlertStats = async function() {
  const now = new Date();
  const oneDayAgo = new Date(now - 86400000);

  return this.aggregate([
    {
      $facet: {
        total: [{ $count: 'count' }],
        active: [
          { $match: { 
            status: { $in: ['NEW', 'ACKNOWLEDGED', 'IN_PROGRESS'] }
          }},
          { $count: 'count' }
        ],
        bySeverity: [
          { $group: { _id: '$severity', count: { $sum: 1 } } }
        ],
        byCategory: [
          { $group: { _id: '$category', count: { $sum: 1 } } }
        ],
        recent: [
          { $match: { createdAt: { $gte: oneDayAgo } } },
          { $group: { _id: '$severity', count: { $sum: 1 } } }
        ],
        responseTime: [
          { $match: { resolvedAt: { $ne: null } } },
          {
            $project: {
              responseTime: { 
                $subtract: ['$resolvedAt', '$createdAt'] 
              }
            }
          },
          { $group: { _id: null, avg: { $avg: '$responseTime' } } }
        ]
      }
    }
  ]);
};

module.exports = mongoose.model('Alert', alertSchema);