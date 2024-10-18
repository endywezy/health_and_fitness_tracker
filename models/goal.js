const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  goalType: { type: String, required: true }, // e.g., "Weight", "Calories"
  targetValue: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Goal', goalSchema);
