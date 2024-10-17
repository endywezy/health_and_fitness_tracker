const express = require('express');
const Goal = require('../models/goal');

const router = express.Router();

// Create Goal (POST)
router.post('/', async (req, res) => {
  const { name, target, deadline } = req.body;
  const newGoal = new Goal({ name, target, deadline });

  try {
    await newGoal.save();
    res.status(201).json(newGoal);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create goal' });
  }
});

// Get All Goals (GET)
router.get('/', async (req, res) => {
  const goals = await Goal.find();
  res.json(goals);
});

// Get a Single Goal (GET)
router.get('/:id', async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) return res.status(404).json({ error: 'Goal not found' });
    res.json(goal);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
});

// Update Goal (PUT)
router.put('/:id', async (req, res) => {
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGoal) return res.status(404).json({ error: 'Goal not found' });
    res.json(updatedGoal);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update goal' });
  }
});

// Delete Goal (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);
    if (!goal) return res.status(404).json({ error: 'Goal not found' });
    res.json({ message: 'Goal deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete goal' });
  }
});

module.exports = router;
