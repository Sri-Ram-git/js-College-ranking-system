const mongoose = require('mongoose');

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
  status: { type: String, default: 'pending', enum: ['pending', 'approved'] }
}, { timestamps: true });

module.exports = mongoose.model('College', CollegeSchema);