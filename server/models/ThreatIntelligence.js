const mongoose = require('mongoose');

const threatIntelligenceSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
    enum: [
      'INTERNAL',
      'ABUSEIPDB',
      'VIRUSTOTAL',
      'ALIENVAULT',
      'SHODAN',
      'GREYNOISE',
      'CUSTOM'
    ],
    index: true
  },
  indicator: {
    type: String,
    required: true,
    index: true
  },
  type: {
    type: String,
    required: true,
    enum: [
      'IP',
      'DOMAIN',
      'URL',
      'HASH',
      'EMAIL',
      'USER_AGENT',
      'PATTERN'
    ],
    index: true
  },
  threat: {
    type: String,
    enum: [
      'MALWARE',
      'PHISHING',
      'SCANNER',
      'BOTNET',
      'DDOS',
      'FRAUD',
      'SPAM',
      'HACKING'
    ],
    index: true
  },
  confidence: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
    index: true
  },
  severity: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'],
    required: true
  },
  firstSeen: {
    type: Date,
    required: true,
    index: true
  },
  lastSeen: {
    type: Date,
    required: true,
    index: true
  },
  reports: [{
    reporter: String,
    timestamp: Date,
    categories: [String],
    description: String,
    reference: String
  }],
  tags: [String],
  metadata: {
    asn: String,
    isp: String,
    country: String,
    city: String,
    organization: String,
    os: String,
    ports: [Number],
    services: [String],
    vulnerabilities: [String]
  },
  related: [{
    type: {
      type: String,
      enum: ['IP', 'DOMAIN', 'HASH']
    },
    value: String,
    relation: String
  }],
  expiresAt: {
    type: Date,
    index: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: true
  },
  notes: String
}, {
  timestamps: true
});

// Indexes
threatIntelligenceSchema.index({ confidence: -1, lastSeen: -1 });
threatIntelligenceSchema.index({ type: 1, threat: 1 });
threatIntelligenceSchema.index({ 'metadata.country': 1 });
threatIntelligenceSchema.index({ tags: 1 });

// TTL index for expired threats
threatIntelligenceSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Methods
threatIntelligenceSchema.methods.updateLastSeen = function() {
  this.lastSeen = new Date();
  return this.save();
};

threatIntelligenceSchema.methods.addReport = function(report) {
  this.reports.push(report);
  this.lastSeen = new Date();
  return this.save();
};

// Statics
threatIntelligenceSchema.statics.getActiveThreats = function(type = null, days = 7) {
  const cutoff = new Date(Date.now() - days * 86400000);
  const query = {
    active: true,
    lastSeen: { $gte: cutoff }
  };
  
  if (type) {
    query.type = type;
  }
  
  return this.find(query).sort({ confidence: -1, lastSeen: -1 });
};

threatIntelligenceSchema.statics.checkIndicator = async function(indicator, type) {
  const threat = await this.findOne({
    indicator,
    type,
    active: true,
    $or: [
      { expiresAt: { $gt: new Date() } },
      { expiresAt: null }
    ]
  });
  
  return threat ? {
    exists: true,
    threat: threat.threat,
    confidence: threat.confidence,
    severity: threat.severity
  } : { exists: false };
};

threatIntelligenceSchema.statics.getThreatStats = async function() {
  return this.aggregate([
    { $match: { active: true } },
    {
      $facet: {
        byType: [
          { $group: { _id: '$type', count: { $sum: 1 } } }
        ],
        byThreat: [
          { $group: { _id: '$threat', count: { $sum: 1 } } }
        ],
        bySeverity: [
          { $group: { _id: '$severity', count: { $sum: 1 } } }
        ],
        byCountry: [
          { $match: { 'metadata.country': { $ne: null } } },
          { $group: { _id: '$metadata.country', count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: 10 }
        ],
        averageConfidence: [
          { $group: { _id: null, avg: { $avg: '$confidence' } } }
        ],
        totalActive: [
          { $count: 'count' }
        ]
      }
    }
  ]);
};

module.exports = mongoose.model('ThreatIntelligence', threatIntelligenceSchema);