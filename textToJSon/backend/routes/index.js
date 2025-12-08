const express = require('express');
const extractRoutes = require('./extract');
const submitRoutes = require('./submit');

const router = express.Router();

/**
 * API Routes
 */
router.use('/extract', extractRoutes);
router.use('/submit', submitRoutes);

// Health check
router.get('/health', (req, res) => {
  res.json({
    success: true,
    status: 'OK',
    message: 'Server is running'
  });
});

module.exports = router;

