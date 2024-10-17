#!/usr/bin/node

const express = require('express');
const Exercise = require('../models/exercise');
const router = express.Router();

// Log Exercise
router.post('/log', async (req, res) => {
  const { userId, type, duration, date } = req.body;
  const newExercise = new Exercise({ userId, type, duration, date });
  
  try {
    await newExercise.save();
    res.status(201).json({ message: 'Exercise logged' });
  } catch (err) {
    res.status(400).json({ error: 'Error logging exercise' });
  }
});

module.exports = router;
