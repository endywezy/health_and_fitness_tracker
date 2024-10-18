const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth'); // Import the login route
require('dotenv').config(); // To load environment variables like JWT_SECRET

const app = express();

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} HTTP/1.1`);
  console.log(`Host: ${req.headers.host}`);
  console.log(`User-Agent: ${req.headers['user-agent']}`);
  console.log(`Accept: ${req.headers.accept}`);
  next(); // Pass control to the next middleware or route handler
});

// Middleware
app.use(express.json()); // Parses incoming requests with JSON payloads

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI) // Removed deprecated options
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route middleware
app.use('/api', authRoute); // This is where the login route will be accessible

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
