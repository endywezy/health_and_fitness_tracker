const express = require('express');
const Exercise = require('../models/exercise');

const router = express.Router();

// Create Exercise (POST)
router.post('/', async (req, res) => {
  const { name, duration, date } = req.body;
  const newExercise = new Exercise({ name, duration, date });

  try {
    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create exercise' });
  }
});

// Get All Exercises (GET)
router.get('/', async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
});

// Get a Single Exercise (GET)
router.get('/:id', async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) return res.status(404).json({ error: 'Exercise not found' });
    res.json(exercise);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
});

// Update Exercise (PUT)
router.put('/:id', async (req, res) => {
  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedExercise) return res.status(404).json({ error: 'Exercise not found' });
    res.json(updatedExercise);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update exercise' });
  }
});

// Delete Exercise (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!exercise) return res.status(404).json({ error: 'Exercise not found' });
    res.json({ message: 'Exercise deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete exercise' });
  }
});

module.exports = router;
