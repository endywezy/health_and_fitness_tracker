#!/usr/bin/node

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const exerciseRoutes = require('./routes/exercises');
const goalRoutes = require('./routes/goals');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/goals', goalRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
