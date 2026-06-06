const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const generateOtp = require('./utils/otpGenerator');
require('dotenv').config({ path: '../.env' });

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/auth/register', async (req, res) => {
  try {
    const { fullName, email, institution } = req.body;
    const otp = generateOtp();
    let user = await User.findOne({ email });
    if (user) { user.currentOtp = otp; user.isVerified = false; }
    else { user = new User({ fullName, email, institution, currentOtp: otp }); }
    await user.save();
    console.log(`\n==============================================\n[OTP] Code [${otp}] generated for: ${email}\n==============================================\n`);
    res.status(200).json({ success: true, message: "OTP code generated successfully." });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

app.post('/api/auth/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.currentOtp !== otp) return res.status(400).json({ success: false, message: "Invalid OTP token." });
    user.isVerified = true;
    user.currentOtp = null;
    await user.save();
    res.status(200).json({ success: true, message: "Identity authorized." });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// Connect to MongoDB using the shared environment variable
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/collegeDB')
  .then(() => {
    console.log('Auth Microservice connected to Database.');
    
    // Only listen on a port if running locally in development mode
    if (process.env.NODE_ENV !== 'production') {
      const PORT = process.env.PORT || 5001;
      app.listen(PORT, () => console.log(`Auth Microservice online on port ${PORT}`));
    }
  })
  .catch(err => console.error('Auth Database connection failed:', err));

// Export for Vercel Serverless Engines
module.exports = app;