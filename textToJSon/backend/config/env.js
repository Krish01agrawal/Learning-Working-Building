const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

/**
 * Environment Configuration
 * Validates and exports environment variables
 */
const requiredEnvVars = ['GEMINI_API_KEY', 'MONGODB_URI'];

const validateEnv = () => {
  const missing = requiredEnvVars.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.warn(`⚠️  Missing environment variables: ${missing.join(', ')}`);
    console.warn('Some features may not work correctly.');
  }
};

// Validate on load
validateEnv();

module.exports = {
  PORT: process.env.PORT || 5001,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/companyData',
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  SYSTEM_EMAIL: process.env.SYSTEM_EMAIL || 'onboarding@resend.dev',
  NODE_ENV: process.env.NODE_ENV || 'development'
};

