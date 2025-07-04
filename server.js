require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Import routes
const ttsRoute = require('./routes/tts');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Correctly mount the TTS route
app.use('/api/tts', ttsRoute);

// Optional: Health check route
app.get('/', (req, res) => {
  res.send('🟢 TTS Backend is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
