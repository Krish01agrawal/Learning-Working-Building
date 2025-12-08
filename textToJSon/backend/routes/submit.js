const express = require('express');
const submitController = require('../controllers/submitController');
const router = express.Router();

/**
 * Submit Routes
 * /api/submit
 */
router.post('/', submitController.submitCompanyData);
router.get('/', submitController.getAllCompanies);

module.exports = router;

