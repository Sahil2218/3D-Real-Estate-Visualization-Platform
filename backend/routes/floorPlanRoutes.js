// routes/floorPlanRoutes.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const FloorPlan = require('../models/floorplan');
const Agent = require('../models/Agent'); // Assuming you have the Agent model

const router = express.Router();

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Name the file with a unique timestamp
  },
});

const upload = multer({ storage });

// Route to handle file upload
router.post('/upload-floorplan', upload.single('floorPlan'), async (req, res) => {
  try {
    const { agentId } = req.body; // The agent ID will be sent with the request
    const { filename } = req.file; // The file is stored as 'filename' in the 'uploads' folder

    // Check if agent exists
    const agent = await Agent.findById(agentId);
    if (!agent) {
      return res.status(404).json({ message: 'Agent not found' });
    }

    // Create a new floor plan document
    const floorPlan = new FloorPlan({
      agent: agentId,
      floorPlanUrl: `/uploads/${filename}`, // Save the relative path to the file
    });

    await floorPlan.save(); // Save the floor plan in the database

    res.status(201).json({ message: 'Floor plan uploaded successfully', floorPlan });
  } catch (err) {
    console.error('Error uploading floor plan:', err);
    res.status(500).json({ message: 'Error uploading floor plan' });
  }
});

module.exports = router;
