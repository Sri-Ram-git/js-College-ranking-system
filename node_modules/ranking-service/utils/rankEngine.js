const calculateScore = (data) => {
  let score = 0;
  const naacWeights = { 'A++': 30, 'A+': 25, 'A': 20, 'B': 12, 'C': 5, 'Not Accredited': 0 };
  score += naacWeights[data.naacRanking] || 0;
  const totalResearch = (Number(data.studentArticles) || 0) + (Number(data.researchPapers) || 0);
  if (totalResearch > 50) score += 30; else if (totalResearch > 10) score += 15;
  const ratio = data.studentStrength / data.facultyStrength;
  if (ratio <= 20) score += 20; else score += 10;
  if (data.libraryBooks > 20000) score += 20; else score += 10;
  return score;
};

const updateSystemRanks = async (CollegeModel) => {
  const colleges = await CollegeModel.find({ status: 'approved' }).sort({ score: -1 });
  const bulkOps = colleges.map((college, index) => ({
    updateOne: { filter: { _id: college._id }, update: { $set: { rank: index + 1 } } }
  }));
  if (bulkOps.length > 0) await CollegeModel.bulkWrite(bulkOps);
};

module.exports = { calculateScore, updateSystemRanks };