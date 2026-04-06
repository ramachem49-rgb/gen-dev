const mongoose = require('mongoose');

const auditTrailSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
    index: true
  },
  action: {
    type: String,
    required: true,
    enum: [
      'CREATE',
      'READ',
      'UPDATE',
      'DELETE',
      'LOGIN',
      'LOGOUT',
      'EXPORT',
      'IMPORT',
      'BACKUP',
      'RESTORE',
      'CONFIG_CHANGE',
      'PERMISSION_CHANGE',
      'ROLE_CHANGE',
      'PASSWORD_CHANGE',
      'EMAIL_CHANGE',
      'ACCOUNT_LOCK',
      'ACCOUNT_UNLOCK',
      'MFA_ENABLE',
      'MFA_DISABLE',
      'API_KEY_CREATE',
      'API_KEY_REVOKE'
    ],
    index: true
  },
  actor: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    email: String,
    role: String,
    ip: String,
    userAgent: String,
    sessionId: String
  },
  target: {
    type: {
      type: String,
      enum: ['USER', 'LESSON', 'MESSAGE', 'SETTING', 'API_KEY', 'SYSTEM']
    },
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    before: mongoose.Schema.Types.Mixed,
    after: mongoose.Schema.Types.Mixed
  },
  changes: [{
    field: String,
    from: mongoose.Schema.Types.Mixed,
    to: mongoose.Schema.Types.Mixed
  }],
  metadata: {
    reason: String,
    approvedBy: String,
    ticketId: String,
    environment: String,
    version: String
  },
  status: {
    type: String,
    enum: ['SUCCESS', 'FAILURE', 'PENDING'],
    default: 'SUCCESS'
  },
  error: {
    code: String,
    message: String,
    stack: String
  },
  request: {
    method: String,
    url: String,
    query: mongoose.Schema.Types.Mixed,
    body: mongoose.Schema.Types.Mixed,
    headers: mongoose.Schema.Types.Mixed
  },
  response: {
    statusCode: Number,
    size: Number,
    time: Number
  },
  sensitive: {
    type: Boolean,
    default: false
  },
  tags: [String],
  retention: {
    type: Date,
    default: () => new Date(Date.now() + 7 * 365 * 86400000) // 7 years
  }
}, {
  timestamps: true
});

// Indexes
auditTrailSchema.index({ 'actor.userId': 1, timestamp: -1 });
auditTrailSchema.index({ 'target.type': 1, 'target.id': 1 });
auditTrailSchema.index({ action: 1, timestamp: -1 });
auditTrailSchema.index({ 'actor.ip': 1, timestamp: -1 });
auditTrailSchema.index({ retention: 1 }, { expireAfterSeconds: 0 });

// Methods
auditTrailSchema.methods.addChange = function(field, from, to) {
  this.changes.push({ field, from, to });
  return this;
};

auditTrailSchema.methods.setError = function(code, message, stack = null) {
  this.status = 'FAILURE';
  this.error = { code, message, stack };
  return this;
};

// Statics
auditTrailSchema.statics.getUserAudit = function(userId, limit = 100) {
  return this.find({ 'actor.userId': userId })
    .sort({ timestamp: -1 })
    .limit(limit)
    .populate('actor.userId', 'name email');
};

auditTrailSchema.statics.getResourceAudit = function(type, id, limit = 100) {
  return this.find({ 'target.type': type, 'target.id': id })
    .sort({ timestamp: -1 })
    .limit(limit)
    .populate('actor.userId', 'name email');
};

auditTrailSchema.statics.getSensitiveActions = function(days = 30) {
  const cutoff = new Date(Date.now() - days * 86400000);
  return this.find({
    timestamp: { $gte: cutoff },
    sensitive: true
  }).sort({ timestamp: -1 });
};

auditTrailSchema.statics.getAuditStats = async function() {
  const now = new Date();
  const oneDayAgo = new Date(now - 86400000);

  return this.aggregate([
    { $match: { timestamp: { $gte: oneDayAgo } } },
    {
      $facet: {
        byAction: [
          { $group: { _id: '$action', count: { $sum: 1 } } },
          { $sort: { count: -1 } }
        ],
        byUser: [
          { $group: { _id: '$actor.userId', count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: 10 }
        ],
        byStatus: [
          { $group: { _id: '$status', count: { $sum: 1 } } }
        ],
        sensitiveCount: [
          { $match: { sensitive: true } },
          { $count: 'count' }
        ]
      }
    }
  ]);
};

module.exports = mongoose.model('AuditTrail', auditTrailSchema);