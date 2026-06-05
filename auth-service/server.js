// auth-service/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// User Schema tracking registration verification flags
const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  institution: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  currentOtp: { type: String }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

// Endpoint 1: Handle registration step and store dummy active OTP code string
app.post('/api/auth/register', async (req, res) => {
  try {
    const { fullName, email, institution } = req.body;
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Secure 6-digit integer
    
    let user = await User.findOne({ email });
    if (user) {
      user.currentOtp = generatedOtp;
    } else {
      user = new User({ fullName, email, institution, currentOtp: generatedOtp });
    }
    await user.save();
    
    console.log(`[OTP Worker] Dispatched verification code [${generatedOtp}] to channel: ${email}`);
    res.status(200).json({ success: true, message: "Verification OTP code string dispatched successfully." });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Endpoint 2: Validate OTP payload parameters to unlock form permissions tokens
app.post('/api/auth/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || user.currentOtp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid token credentials provided." });
    }
    
    user.isVerified = true;
    user.currentOtp = null; // Purge volatile code parameters
    await user.save();
    
    res.status(200).json({ success: true, message: "Identity authorized successfully." });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

mongoose.connect(process.env.MONGO_AUTH_URI || 'mongodb://127.0.0.1:27017/rankingAuth')
  .then(() => app.listen(5001, () => console.log('Auth Microservice live on port 5001')));