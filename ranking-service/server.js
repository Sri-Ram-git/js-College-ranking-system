// ranking-service/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const CollegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  naacRanking: { type: String, required: true },
  facultyStrength: { type: Number, required: true },
  studentStrength: { type: Number, required: true },
  labsCount: { type: Number, required: true },
  libraryBooks: { type: Number, required: true },
  studentArticles: { type: Number, required: true },
  researchPapers: { type: Number, required: true },
  score: { type: Number, default: 0 },
  rank: { type: Number },
  status: { type: String, default: 'pending' }
}, { timestamps: true });

const College = mongoose.model('College', CollegeSchema);

// Score weight engine calculator logic function mapping array dimensions
const evaluateMetrics = (data) => {
  let pts = 0;
  const weights = { 'A++': 30, 'A+': 25, 'A': 20, 'B': 12, 'C': 5, 'Not Accredited': 0 };
  pts += weights[data.naacRanking] || 0;
  if ((data.studentArticles + data.researchPapers) > 50) pts += 30; else pts += 15;
  if ((data.studentStrength / data.facultyStrength) <= 20) pts += 20; else pts += 10;
  if (data.libraryBooks > 20000) pts += 20; else pts += 10;
  return pts;
};

app.post('/api/ranking/submit', async (req, res) => {
  try {
    const record = new College({ ...req.body, status: 'pending' });
    await record.save();
    res.status(201).json({ success: true, message: "Metrics recorded into validation pipeline queue parameters." });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

app.get('/api/ranking/pending', async (req, res) => {
  const data = await College.find({ status: 'pending' });
  res.json({ success: true, data });
});

app.put('/api/ranking/approve/:id', async (req, res) => {
  try {
    const inst = await College.findById(req.params.id);
    if (!inst) return res.status(404).json({ success: false });
    
    inst.score = evaluateMetrics(inst);
    inst.status = 'approved';
    await inst.save();
    
    // Sort and update ranks across all approved records
    const all = await College.find({ status: 'approved' }).sort({ score: -1 });
    for (let i = 0; i < all.length; i++) {
      await College.updateOne({ _id: all[i]._id }, { $set: { rank: i + 1 } });
    }
    
    res.json({ success: true });
  } catch (err) { res.status(500).json({ success: false, error: err.message }); }
});

app.get('/api/ranking/leaderboard', async (req, res) => {
  const sorted = await College.find({ status: 'approved' }).sort({ rank: 1 });
  res.json({ success: true, data: sorted });
});

mongoose.connect(process.env.MONGO_RANK_URI || 'mongodb://127.0.0.1:27017/rankingMetrics')
  .then(() => app.listen(5002, () => console.log('Ranking Core Microservice running on port 5002')));