// Ensure NO require statements for College.js are at the top of this file!

const calculateScore = (data) => {
  let score = 0;

  // NAAC Weightage
  const naacWeights = { 'A++': 30, 'A+': 25, 'A': 20, 'B': 12, 'C': 5, 'Not Accredited': 0 };
  score += naacWeights[data.naacRanking] || 0;

  // Research Output Weightage
  const totalResearch = (Number(data.studentArticles) || 0) + (Number(data.researchPapers) || 0);
  if (totalResearch > 100) score += 30;
  else if (totalResearch > 50) score += 20;
  else if (totalResearch > 10) score += 10;
  else if (totalResearch > 0) score += 5;

  // Faculty-Student Ratio Weightage
  const ratio = data.studentStrength / data.facultyStrength;
  if (ratio <= 15) score += 20;
  else if (ratio <= 20) score += 15;
  else if (ratio <= 30) score += 10;
  else score += 5;

  // Infrastructure
  if (data.libraryBooks > 20000) score += 10;
  else if (data.libraryBooks > 5000) score += 5;

  if (data.labsCount > 15) score += 10;
  else if (data.labsCount > 5) score += 5;

  return score;
};

const updateSystemRanks = async (CollegeModel) => {
  const colleges = await CollegeModel.find().sort({ score: -1 });
  
  const bulkOperations = colleges.map((college, index) => ({
    updateOne: {
      filter: { _id: college._id },
      update: { $set: { rank: index + 1 } }
    }
  }));

  if (bulkOperations.length > 0) {
    await CollegeModel.bulkWrite(bulkOperations);
  }
};

// Export clean objects
module.exports = { calculateScore, updateSystemRanks };