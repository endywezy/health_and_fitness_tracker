#!/usr/bin/node

const express = require('express');
const Goal = require('../models/goal');

const router = express.Router();

// Set Goal
router.post('/set', async (req, res) => {
  const { userId, weeklyExercisesGoal } = req.body;
  const newGoal = new Goal({ userId, weeklyExercisesGoal });

  try {
    await newGoal.save();
    res.status(201).json({ message: 'Goal set' });
  } catch (err) {
    res.status(400).json({ error: 'Error setting goal' });
  }
});

module.exports = router;
