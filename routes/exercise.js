const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware'); // Use named import
const router = express.Router();

// Log an exercise (Protected route)
router.post('/log', authMiddleware, (req, res) => {
  const { exercise, duration } = req.body;
  // Save exercise data to the database (for now, just respond with the data)
  res.json({ message: 'Exercise logged', exercise, duration });
});

// Get all exercises (Protected route)
router.get('/all', authMiddleware, (req, res) => {
  // Fetch all exercises (mock data for now)
  res.json([{ exercise: 'Running', duration: '30 minutes' }, { exercise: 'Cycling', duration: '45 minutes' }]);
});

module.exports = router;
