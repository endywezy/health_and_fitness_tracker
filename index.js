const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import routes
const exerciseRoutes = require('./routes/exercise');

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/exercise', exerciseRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/health_tracker')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
