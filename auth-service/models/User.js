const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  institution: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  currentOtp: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
