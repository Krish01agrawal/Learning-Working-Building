const mongoose = require('mongoose');
const config = require('./env');

/**
 * Database Configuration
 * Handles MongoDB connection
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      config.MONGODB_URI,
      {
        // Mongoose 6+ doesn't need these options, but keeping for compatibility
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

