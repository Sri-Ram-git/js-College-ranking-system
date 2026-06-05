const College = require('../models/College');
const { calculateScore, updateSystemRanks } = require('../utils/rankEngine');
const { sendApprovalEmail } = require('../utils/emailService');

// Public Form Submission (Default Status: Pending)
exports.submitCollegeData = async (req, res) => {
  try {
    const newCollege = new College({
      ...req.body,
      status: 'pending'
    });
    await newCollege.save();
    
    res.status(201).json({
      success: true,
      message: "Data transmitted to verification queue successfully."
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Admin Dashboard: Fetch all pending logs
exports.getPendingColleges = async (req, res) => {
  try {
    const pendingData = await College.find({ status: 'pending' });
    res.status(200).json({ success: true, data: pendingData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Admin Action Workflow (Approve / Calculate / Disburse Mail)
exports.approveCollege = async (req, res) => {
  try {
    const { id } = req.params;
    const college = await College.findById(id);
    if (!college) return res.status(404).json({ success: false, message: "Record missing" });

    // 1. Process matrix weight mathematics
    college.score = calculateScore(college);
    college.status = 'approved';
    await college.save();

    // 2. Cascade update positions throughout database array
    await updateSystemRanks(College);

    // 3. Re-fetch current updated index rank to send in email
    const updatedCollege = await College.findById(id);

    // 4. Fire automated email tracking routine
    try {
      await sendApprovalEmail(updatedCollege.email, updatedCollege.name, updatedCollege.score, updatedCollege.rank);
    } catch (mailErr) {
      console.error("Mail worker pipeline offline:", mailErr.message);
    }

    res.status(200).json({ success: true, message: "Record verified, ranked, and notifier dispatched." });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Public Verified Live Leaderboard View
exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await College.find({ status: 'approved' }).sort({ rank: 1 });
    res.status(200).json({ success: true, data: leaderboard });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};