// server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const propertyRoutes = require('./routes/propertyRoutes');
const agentRoutes = require('./routes/agentRoutes');
const floorPlanRoutes = require('./routes/floorPlanRoutes'); // Import new route
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files
app.use('/api/properties', propertyRoutes);
app.use('/api/agents', agentRoutes);
app.use('/api/floorplans', floorPlanRoutes); // Register new route for floor plans

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
