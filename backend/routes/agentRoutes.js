const express = require('express');
const router = express.Router();
const Agent = require('../models/Agent');

// LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const agent = await Agent.findOne({ username, password });
    if (agent) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// SIGNUP
router.post('/signup', async (req, res) => {
  const { username, password, phone, email } = req.body;
  try {
    const existing = await Agent.findOne({ username });
    if (existing) {
      return res.status(400).json({ success: false, message: "Username already exists" });
    }

    const newAgent = new Agent({ username, password, phone, email });
    await newAgent.save();
    res.status(201).json({ success: true, message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Error during signup", error: error.message });
  }
});

// CONTACT LIST
router.get('/', async (req, res) => {
  try {
    const agents = await Agent.find({}, { password: 0 }); // exclude passwords
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching agents", error: error.message });
  }
});

module.exports = router;
