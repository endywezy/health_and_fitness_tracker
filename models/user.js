#!/usr/bin/node

const mongoose = require('mongoose');

// Check if the 'User' model already exists
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Use the existing model if it already exists
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
