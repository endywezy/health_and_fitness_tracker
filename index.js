const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const exerciseRoutes = require('./routes/exercises');
const goalRoutes = require('./routes/goals');

const app = express();
const PORT = 3000;

app.use(express.json());

// Register Routes
app.use('/auth', authRoutes); // User authentication routes
app.use('/exercises', exerciseRoutes); // Exercise management routes
app.use('/goals', goalRoutes); // Goal management routes

app.get('/', (req, res) => {
  res.send('Welcome to the Health and Fitness Tracker API!');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDB', {
  // MongoDB connection options (no deprecated options needed for newer Mongoose versions)
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.log(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
