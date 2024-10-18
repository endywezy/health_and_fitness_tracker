const express = require('express');
const { getProgress } = require('../controllers/progressController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/track', authMiddleware, getProgress);

module.exports = router;
