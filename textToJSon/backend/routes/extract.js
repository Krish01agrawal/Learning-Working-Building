const express = require('express');
const extractController = require('../controllers/extractController');
const router = express.Router();

/**
 * Extract Routes
 * /api/extract
 */
router.post('/', extractController.extractCompanyData);

module.exports = router;

