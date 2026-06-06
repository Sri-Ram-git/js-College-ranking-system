const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const College = require('./models/College');
const { calculateScore, updateSystemRanks } = require('./utils/rankEngine');
const { sendApprovalEmail } = require('./utils/emailService');
require('dotenv').config({ path: '../.env' });

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/ranking/submit', async (req, res) => {
  try {
    const record = new College({ ...req.body, status: 'pending' });
    await record.save();
    res.status(201).json({ success: true, message: "Metrics recorded successfully." });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

app.get('/api/ranking/pending', async (req, res) => {
  try {
    const data = await College.find({ status: 'pending' });
    res.json({ success: true, data });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

app.put('/api/ranking/approve/:id', async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    if (!college) return res.status(404).json({ success: false, message: "Record missing" });
    college.score = calculateScore(college);
    college.status = 'approved';
    await college.save();
    await updateSystemRanks(College);
    const updated = await College.findById(req.params.id);
    try {
      await sendApprovalEmail(updated.email, updated.name, updated.score, updated.rank);
    } catch (mErr) { console.error("Mail runner system log failure:", mErr.message); }
    res.json({ success: true, message: "Approved and ranked." });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

app.get('/api/ranking/leaderboard', async (req, res) => {
  try {
    const leaderboard = await College.find({ status: 'approved' }).sort({ rank: 1 });
    res.json({ success: true, data: leaderboard });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

// Connect to MongoDB using the shared environment variable
// Connect to MongoDB using the shared environment variable
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/collegeDB')
  .then(() => {
    console.log('Ranking Microservice connected to Database.');
    
    // Only listen on a port if running locally in development mode
    if (process.env.NODE_ENV !== 'production') {
      const PORT = process.env.PORT || 5002;
      app.listen(PORT, () => console.log(`Ranking Microservice online on port ${PORT}`));
    }
  })
  .catch(err => console.error('Ranking Database connection failed:', err));

// Export for Vercel Serverless Engines
module.exports = app;