#!/usr/bin/node

const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

// Avoid overwriting the Exercise model
const Exercise = mongoose.models.Exercise || mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
