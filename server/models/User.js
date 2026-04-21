const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    enum: ['admin', 'student'],
    default: 'student'
  },
  // Short display ID e.g. GD-A1B2C3
  userId: {
    type: String,
    unique: true,
    sparse: true
  },
  avatar: { type: String, default: '' },
  bio:    { type: String, maxlength: 200, default: '' },

  // Lab rate limiting
  lab: {
    limit:     { type: Number,  default: 15 },
    used:      { type: Number,  default: 0 },
    resetAt:   { type: Date,    default: () => new Date(Date.now() + 86400000) },
    unlimited: { type: Boolean, default: false },
  },

  // Security
  loginAttempts: { type: Number, default: 0 },
  lockUntil:     { type: Date },
  lastLogin:     { type: Date },
  lastLoginIP:   { type: String },
  createdAt:     { type: Date, default: Date.now }
}, { timestamps: true });

// ── Pre-save ──────────────────────────────────────────────────────────────────
userSchema.pre('save', async function(next) {
  if (!this.userId) {
    this.userId = 'GD-' + crypto.randomBytes(3).toString('hex').toUpperCase();
  }
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ── Methods ───────────────────────────────────────────────────────────────────
userSchema.methods.matchPassword = async function(entered) {
  return bcrypt.compare(entered, this.password);
};

userSchema.methods.isLocked = function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
};

userSchema.methods.incLoginAttempts = async function() {
  if (this.lockUntil && this.lockUntil < Date.now()) {
    return this.updateOne({ $set: { loginAttempts: 1 }, $unset: { lockUntil: 1 } });
  }
  const updates = { $inc: { loginAttempts: 1 } };
  if (this.loginAttempts + 1 >= 5) {
    updates.$set = { lockUntil: new Date(Date.now() + 15 * 60 * 1000) };
  }
  return this.updateOne(updates);
};

// Check & consume one lab run — returns { ok, remaining, used, limit, resetHrs }
userSchema.methods.consumeLabRun = async function() {
  const now = new Date();
  if (now > this.lab.resetAt) {
    this.lab.used = 0;
    this.lab.resetAt = new Date(now.getTime() + 86400000);
    await this.save();
  }
  if (this.lab.unlimited) return { ok: true, remaining: 9999, unlimited: true };
  if (this.lab.used >= this.lab.limit) {
    const resetHrs = Math.ceil((this.lab.resetAt - now) / 3600000);
    return { ok: false, resetHrs, used: this.lab.used, limit: this.lab.limit };
  }
  this.lab.used += 1;
  await this.save();
  return { ok: true, remaining: this.lab.limit - this.lab.used, used: this.lab.used, limit: this.lab.limit };
};

module.exports = mongoose.model('User', userSchema);
