
const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ['rent', 'lease'], required: true },
  modelFilePath: { type: String, required: true }
});

module.exports = mongoose.model('Property', propertySchema);