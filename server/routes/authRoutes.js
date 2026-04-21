const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe, updateProfile, changePassword } = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login',    loginUser);
router.post('/logout',   (req, res) => res.json({ success: true, message: 'Logged out' }));
router.get('/me',        protect, getMe);
router.put('/profile',   protect, updateProfile);
router.put('/password',  protect, changePassword);

// Admin: set user lab limit
router.put('/lab-limit/:userId', protect, admin, async (req, res) => {
  try {
    const User = require('../models/User');
    const { limit, unlimited } = req.body;
    const user = await User.findOne({ userId: req.params.userId });
    if (!user) return res.status(404).json({ success: false, error: 'User not found' });

    if (typeof limit === 'number')      user.lab.limit     = Math.max(0, limit);
    if (typeof unlimited === 'boolean') user.lab.unlimited = unlimited;
    await user.save();

    const telegramService = require('../services/telegramService');
    telegramService.sendLabNotify({
      title: '⚙️ Lab Limit Updated',
      userId: user.userId,
      name: user.name,
      extra: `Limit: ${user.lab.unlimited ? 'UNLIMITED' : user.lab.limit + '/day'}\nBy: ${req.user?.email || 'admin'}`,
    });

    res.json({ success: true, data: { userId: user.userId, lab: user.lab } });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Admin: reset lab usage
router.post('/lab-reset/:userId', protect, admin, async (req, res) => {
  try {
    const User = require('../models/User');
    const user = await User.findOne({ userId: req.params.userId });
    if (!user) return res.status(404).json({ success: false, error: 'User not found' });
    user.lab.used = 0;
    user.lab.resetAt = new Date(Date.now() + 86400000);
    await user.save();
    res.json({ success: true, data: { userId: user.userId, lab: user.lab } });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// Admin: list all users with lab stats
router.get('/users', protect, admin, async (req, res) => {
  try {
    const User = require('../models/User');
    const users = await User.find().select('userId name email role lab lastLogin createdAt');
    res.json({ success: true, data: users });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
});

// ── Monitor routes — authenticated by MONITORING_SECRET (no JWT needed) ───────
const monitorAuth = (req, res, next) => {
  if (req.headers['x-monitor-secret'] !== process.env.MONITORING_SECRET)
    return res.status(403).json({ success: false, error: 'Forbidden' });
  next();
};

router.get('/monitor/users', monitorAuth, async (req, res) => {
  try {
    const User = require('../models/User');
    const users = await User.find().sort({ createdAt: -1 })
      .select('userId name email role lab lastLogin createdAt');
    res.json({ success: true, data: users });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

router.put('/monitor/lab-limit/:userId', monitorAuth, async (req, res) => {
  try {
    const User = require('../models/User');
    const { limit, unlimited } = req.body;
    const user = await User.findOne({ userId: req.params.userId });
    if (!user) return res.status(404).json({ success: false, error: 'User not found' });
    if (typeof limit === 'number')      user.lab.limit     = Math.max(0, limit);
    if (typeof unlimited === 'boolean') user.lab.unlimited = unlimited;
    await user.save();
    const tg = require('../services/telegramService');
    tg.sendLabNotify({ title: '⚙️ Lab Limit Updated via Bot', userId: user.userId, name: user.name,
      extra: `Limit: ${user.lab.unlimited ? 'UNLIMITED' : user.lab.limit + '/day'}` });
    res.json({ success: true, data: { userId: user.userId, lab: user.lab } });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

router.post('/monitor/lab-reset/:userId', monitorAuth, async (req, res) => {
  try {
    const User = require('../models/User');
    const user = await User.findOne({ userId: req.params.userId });
    if (!user) return res.status(404).json({ success: false, error: 'User not found' });
    user.lab.used = 0;
    user.lab.resetAt = new Date(Date.now() + 86400000);
    await user.save();
    res.json({ success: true, data: { userId: user.userId, lab: user.lab } });
  } catch (e) { res.status(500).json({ success: false, error: e.message }); }
});

module.exports = router;
