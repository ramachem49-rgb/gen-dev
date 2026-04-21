const User = require('../models/User');
const jwt = require('jsonwebtoken');
const telegramService = require('../services/telegramService');

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE || '7d' });

const safeUser = (u) => ({
  _id:       u._id,
  userId:    u.userId,
  name:      u.name,
  email:     u.email,
  role:      u.role,
  avatar:    u.avatar,
  bio:       u.bio,
  lab:       { limit: u.lab.limit, used: u.lab.used, unlimited: u.lab.unlimited, resetAt: u.lab.resetAt },
  createdAt: u.createdAt,
});

// POST /api/auth/register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ success: false, error: 'All fields required' });

    if (await User.findOne({ email }))
      return res.status(400).json({ success: false, error: 'Email already registered' });

    const user = await User.create({ name, email, password });

    telegramService.sendLabNotify({
      title: '👤 New User Registered',
      userId: user.userId,
      name: user.name,
      email: user.email,
      ip: req.ip,
    });

    res.status(201).json({
      success: true,
      data: { ...safeUser(user), token: generateToken(user._id) }
    });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
};

// POST /api/auth/login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ success: false, error: 'Email and password required' });

    const user = await User.findOne({ email }).select('+password +loginAttempts +lockUntil');
    if (!user)
      return res.status(401).json({ success: false, error: 'Invalid credentials' });

    // Check lock
    if (user.isLocked()) {
      const mins = Math.ceil((user.lockUntil - Date.now()) / 60000);
      return res.status(423).json({ success: false, error: `Account locked. Try again in ${mins} min` });
    }

    const match = await user.matchPassword(password);
    if (!match) {
      await user.incLoginAttempts();
      const remaining = Math.max(0, 5 - (user.loginAttempts + 1));
      return res.status(401).json({
        success: false,
        error: remaining > 0 ? `Invalid credentials (${remaining} attempts left)` : 'Account locked for 15 minutes'
      });
    }

    // Reset attempts on success
    await user.updateOne({ $set: { loginAttempts: 0, lastLogin: new Date(), lastLoginIP: req.ip }, $unset: { lockUntil: 1 } });

    res.json({
      success: true,
      data: { ...safeUser(user), token: generateToken(user._id) }
    });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
};

// GET /api/auth/me
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ success: true, data: safeUser(user) });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
};

// PUT /api/auth/profile
const updateProfile = async (req, res) => {
  try {
    const { name, bio, avatar } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { ...(name && { name }), ...(bio !== undefined && { bio }), ...(avatar !== undefined && { avatar }) },
      { new: true, runValidators: true }
    );
    res.json({ success: true, data: safeUser(user) });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
};

// PUT /api/auth/password
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id).select('+password');
    if (!await user.matchPassword(currentPassword))
      return res.status(400).json({ success: false, error: 'Current password incorrect' });
    user.password = newPassword;
    await user.save();
    res.json({ success: true, message: 'Password updated' });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
};

module.exports = { registerUser, loginUser, getMe, updateProfile, changePassword };
