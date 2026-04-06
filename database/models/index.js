// database/models/index.js
const User = require('./User');
const Lesson = require('./Lesson');
const Message = require('./Message');
const SecurityLog = require('./SecurityLog');
const BlockedIP = require('./BlockedIP');
const ThreatIntelligence = require('./ThreatIntelligence');
const Alert = require('./Alert');
const AuditTrail = require('./AuditTrail');

module.exports = {
  User,
  Lesson,
  Message,
  SecurityLog,
  BlockedIP,
  ThreatIntelligence,
  Alert,
  AuditTrail
};