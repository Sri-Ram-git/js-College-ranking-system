const express = require('express');
const router = express.Router();
const { submitCollegeData, getPendingColleges, approveCollege, getLeaderboard } = require('../controllers/collegeController');

router.post('/submit', submitCollegeData);
router.get('/pending', getPendingColleges);
router.put('/approve/:id', approveCollege);
router.get('/leaderboard', getLeaderboard);

module.exports = router;