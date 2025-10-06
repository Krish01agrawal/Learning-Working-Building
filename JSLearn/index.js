#!/usr/bin/env node

/**
 * JSLearn - JavaScript & Node.js Learning Project
 * 
 * This is the main entry point for the learning project.
 * Run this file to get started with your learning journey.
 */

console.log('🚀 Welcome to JSLearn!');
console.log('======================\n');

console.log('📚 Your JavaScript & Node.js Learning Journey Starts Here!\n');

console.log('🎯 Available Learning Modules:');
console.log('  1. JavaScript Basics (01-javascript-basics.js)');
console.log('  2. Node.js Core Concepts (02-nodejs-core-concepts.js)');
console.log('  3. HTTP Servers & APIs (03-http-servers.js)\n');

console.log('🛠️  Available Commands:');
console.log('  npm run basics    - Run JavaScript fundamentals');
console.log('  npm run nodejs    - Run Node.js core concepts');
console.log('  npm run http      - Run HTTP servers tutorial');
console.log('  npm run dev       - Run with auto-restart (nodemon)');
console.log('  npm run lint      - Check code quality');
console.log('  npm run format    - Format code with Prettier\n');

console.log('📖 Learning Resources:');
console.log('  - NODEJS_LEARNING_GUIDE.md - Detailed learning guide');
console.log('  - exercises/ - Practice exercises for each module');
console.log('  - starterPack/ - Simple examples to get started\n');

console.log('🎯 Quick Start:');
console.log('  1. Run: node 01-javascript-basics.js');
console.log('  2. Follow the learning guide');
console.log('  3. Complete the exercises');
console.log('  4. Build your own projects!\n');

console.log('💡 Tips:');
console.log('  - Take your time with each concept');
console.log('  - Experiment with the code examples');
console.log('  - Complete all exercises');
console.log('  - Build real projects to reinforce learning\n');

console.log('🌟 Happy Learning! 🌟\n');

// Check if Node.js version is sufficient
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 14) {
  console.log('⚠️  Warning: Node.js version 14 or higher is recommended.');
  console.log(`   Current version: ${nodeVersion}`);
  console.log('   Download from: https://nodejs.org/\n');
} else {
  console.log(`✅ Node.js version check: ${nodeVersion} (Good!)\n`);
}

// Display current working directory
console.log(`📁 Current directory: ${process.cwd()}`);
console.log(`🕐 Started at: ${new Date().toLocaleString()}\n`);

// Export for potential use in other modules
module.exports = {
  name: 'JSLearn',
  version: '1.0.0',
  description: 'JavaScript & Node.js Learning Project'
}; 