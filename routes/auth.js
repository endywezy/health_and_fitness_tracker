const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// User Signup (POST)
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(400).json({ error: 'User already exists' });
  }
});

// User Login (POST)
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });
  res.json({ token });
});

// Retrieve User Profile (GET)
router.get('/profile', async (req, res) => {
  try {
    const token = req.headers['authorization'];
    const decoded = jwt.verify(token, 'secretKey');
    const user = await User.findById(decoded.id);

    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json({ username: user.username });
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// Delete User (DELETE)
router.delete('/delete', async (req, res) => {
  try {
    const token = req.headers['authorization'];
    const decoded = jwt.verify(token, 'secretKey');
    const user = await User.findById(decoded.id);

    if (!user) return res.status(404).json({ error: 'User not found' });

    await User.findByIdAndDelete(decoded.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

module.exports = router;
