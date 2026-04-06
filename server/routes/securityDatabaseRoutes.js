const express = require('express');
const router = express.Router();
const securityDB = require('../services/securityDatabaseService');
const { protect, admin } = require('../middleware/authMiddleware');

// ទទួលបានស្ថិតិសុវត្ថិភាព
router.get('/stats', protect, admin, async (req, res) => {
  try {
    const stats = await securityDB.getSecurityStats();
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ទទួលបាន security logs
router.get('/logs', protect, admin, async (req, res) => {
  try {
    const { page = 1, limit = 50, severity, eventType, ip } = req.query;
    
    const query = {};
    if (severity) query.severity = severity;
    if (eventType) query.eventType = eventType;
    if (ip) query.ip = ip;
    
    const logs = await SecurityLog.find(query)
      .sort({ timestamp: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));
    
    const total = await SecurityLog.countDocuments(query);
    
    res.json({
      success: true,
      data: logs,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ទទួលបាន blocked IPs
router.get('/blocked-ips', protect, admin, async (req, res) => {
  try {
    const { active = true } = req.query;
    
    let query = {};
    if (active === 'true') {
      query = {
        $or: [
          { expiresAt: { $gt: new Date() } },
          { expiresAt: null }
        ],
        unblockedAt: null
      };
    }
    
    const blockedIPs = await BlockedIP.find(query)
      .sort({ blockedAt: -1 });
    
    res.json({
      success: true,
      data: blockedIPs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ទប់ស្កាត់ IP ដោយដៃ
router.post('/block-ip', protect, admin, async (req, res) => {
  try {
    const { ip, reason, severity, days = 7 } = req.body;
    
    if (!ip || !reason) {
      return res.status(400).json({
        success: false,
        error: 'IP and reason are required'
      });
    }
    
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + days);
    
    const blockedIP = await BlockedIP.create({
      ip,
      reason,
      severity: severity || 'MEDIUM',
      expiresAt,
      blockedBy: {
        userId: req.user.id,
        email: req.user.email
      }
    });
    
    // កត់ត្រា audit
    await securityDB.logAudit({
      action: 'BLOCK_IP',
      actor: {
        userId: req.user.id,
        email: req.user.email,
        ip: req.ip,
        userAgent: req.headers['user-agent']
      },
      target: {
        type: 'IP',
        name: ip
      },
      metadata: {
        reason,
        days
      },
      status: 'SUCCESS'
    });
    
    res.json({
      success: true,
      data: blockedIP
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ដោះស្រាយ IP
router.post('/unblock-ip/:ip', protect, admin, async (req, res) => {
  try {
    const { ip } = req.params;
    
    const blockedIP = await BlockedIP.findOne({ ip, unblockedAt: null });
    
    if (!blockedIP) {
      return res.status(404).json({
        success: false,
        error: 'IP not found or not blocked'
      });
    }
    
    await blockedIP.unblock(req.user.id, req.user.email);
    
    // កត់ត្រា audit
    await securityDB.logAudit({
      action: 'UNBLOCK_IP',
      actor: {
        userId: req.user.id,
        email: req.user.email,
        ip: req.ip,
        userAgent: req.headers['user-agent']
      },
      target: {
        type: 'IP',
        name: ip
      },
      status: 'SUCCESS'
    });
    
    res.json({
      success: true,
      message: 'IP unblocked successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ទទួលបាន alerts
router.get('/alerts', protect, admin, async (req, res) => {
  try {
    const { status, severity, limit = 50 } = req.query;
    
    const query = {};
    if (status) query.status = status;
    if (severity) query.severity = severity;
    
    const alerts = await Alert.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit));
    
    res.json({
      success: true,
      data: alerts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ដោះស្រាយ alert
router.post('/alerts/:id/resolve', protect, admin, async (req, res) => {
  try {
    const { id } = req.params;
    const { resolution } = req.body;
    
    const alert = await Alert.findById(id);
    
    if (!alert) {
      return res.status(404).json({
        success: false,
        error: 'Alert not found'
      });
    }
    
    await alert.resolve(req.user.id, req.user.email, resolution);
    
    res.json({
      success: true,
      data: alert
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ពិនិត្យ IP ក្នុង threat intelligence
router.get('/check-ip/:ip', protect, admin, async (req, res) => {
  try {
    const { ip } = req.params;
    
    const result = await securityDB.checkIP(ip);
    
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// បន្ថែម threat intelligence
router.post('/threat-intel', protect, admin, async (req, res) => {
  try {
    const threat = await securityDB.addThreatIntel(req.body);
    
    res.json({
      success: true,
      data: threat
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ទទួលបាន audit logs
router.get('/audit', protect, admin, async (req, res) => {
  try {
    const { userId, action, days = 7, limit = 100 } = req.query;
    
    const cutoff = new Date(Date.now() - days * 86400000);
    const query = { timestamp: { $gte: cutoff } };
    
    if (userId) query['actor.userId'] = userId;
    if (action) query.action = action;
    
    const audits = await AuditTrail.find(query)
      .sort({ timestamp: -1 })
      .limit(parseInt(limit))
      .populate('actor.userId', 'name email');
    
    res.json({
      success: true,
      data: audits
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// សម្អាតទិន្នន័យចាស់
router.post('/cleanup', protect, admin, async (req, res) => {
  try {
    await securityDB.cleanup();
    
    res.json({
      success: true,
      message: 'Cleanup completed successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;