const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  calories: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Exercise', exerciseSchema);
