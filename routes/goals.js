const express = require('express');
const { setGoal, getGoals } = require('../controllers/goalController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/set', authMiddleware, setGoal);
router.get('/all', authMiddleware, getGoals);

module.exports = router;
