const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  email: { type: String }
});

module.exports = mongoose.model('Agent', agentSchema);
