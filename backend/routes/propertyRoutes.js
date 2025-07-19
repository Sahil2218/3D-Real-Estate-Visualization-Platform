const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// 🔹 Add new property (NO FILE UPLOAD)
router.post('/add', async (req, res) => {
  try {
    const { name, description, phone, address, price, type, modelFilePath } = req.body;
    const newProperty = new Property({ name, description, phone, address, price, type, modelFilePath });
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    console.error("❌ Error adding property:", error);
    res.status(500).json({ message: 'Error adding property', error: error.message });
  }
});

// 🔹 Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().select('-__v');
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error: error.message });
  }
});

// 🔹 Get a property by ID
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).select('-__v');
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching property', error: error.message });
  }
});

// 🔹 Update a property
router.put('/:id', async (req, res) => {
  try {
    const { name, description, phone, address, price, type, modelFilePath } = req.body;
    const updated = await Property.findByIdAndUpdate(
      req.params.id,
      { name, description, phone, address, price, type, modelFilePath },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error updating property', error: error.message });
  }
});

// 🔹 Delete a property
router.delete('/:id', async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting property', error: error.message });
  }
});

module.exports = router;


