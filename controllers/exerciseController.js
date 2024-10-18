const Exercise = require('../models/exercise');

exports.logExercise = async (req, res) => {
  const { type, duration, calories } = req.body;
  const userId = req.user.id;

  const newExercise = new Exercise({ user: userId, type, duration, calories });

  try {
    const exercise = await newExercise.save();
    res.status(201).json(exercise);
  } catch (err) {
    res.status(400).json({ error: 'Failed to log exercise' });
  }
};

exports.getExercises = async (req, res) => {
  const userId = req.user.id;

  try {
    const exercises = await Exercise.find({ user: userId });
    res.json(exercises);
  } catch (err) {
    res.status(400).json({ error: 'Failed to retrieve exercises' });
  }
};
