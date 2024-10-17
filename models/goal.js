#!/usr/bin/node

const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  weeklyExercisesGoal: { type: Number, required: true }
});

module.exports = mongoose.model('Goal', goalSchema);
