/**
 * Node.js Core Concepts Exercises
 * 
 * This file contains practice exercises to reinforce your Node.js learning.
 * Complete each exercise and test your solutions.
 */

const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');

console.log('🚀 Node.js Exercises - Let\'s Practice!\n');

// ============================================================================
// EXERCISE 1: File System Operations
// ============================================================================

console.log('📝 Exercise 1: File System Operations');
console.log('===================================');

/**
 * TODO: Complete these file system tasks:
 * 1. Create a new file called 'exercise-data.txt' with some content
 * 2. Read the file and display its content
 * 3. Append new content to the file
 * 4. Check if a file exists before reading it
 * 5. Create a directory called 'exercise-files'
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 2: Path Operations
// ============================================================================

console.log('📝 Exercise 2: Path Operations');
console.log('=============================');

/**
 * TODO: Use the path module to:
 * 1. Join multiple path segments
 * 2. Get the directory name of a file path
 * 3. Get the file extension of a path
 * 4. Resolve a relative path to absolute
 * 5. Check if a path is absolute
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 3: Events and EventEmitter
// ============================================================================

console.log('📝 Exercise 3: Events and EventEmitter');
console.log('=====================================');

/**
 * TODO: Create an EventEmitter and:
 * 1. Create a custom event emitter class
 * 2. Emit different types of events
 * 3. Listen to events and handle them
 * 4. Remove event listeners
 * 5. Handle error events
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 4: Buffers and Streams
// ============================================================================

console.log('📝 Exercise 4: Buffers and Streams');
console.log('=================================');

/**
 * TODO: Work with buffers and streams:
 * 1. Create a buffer from a string
 * 2. Convert buffer to different encodings
 * 3. Create a readable stream
 * 4. Create a writable stream
 * 5. Pipe data between streams
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 5: Process Management
// ============================================================================

console.log('📝 Exercise 5: Process Management');
console.log('================================');

/**
 * TODO: Work with process information:
 * 1. Display current working directory
 * 2. Show Node.js version
 * 3. Display environment variables
 * 4. Get process ID
 * 5. Handle process signals
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 6: URL and Query String Handling
// ============================================================================

console.log('📝 Exercise 6: URL and Query String Handling');
console.log('===========================================');

const url = require('url');
const querystring = require('querystring');

/**
 * TODO: Work with URLs and query strings:
 * 1. Parse a URL and extract components
 * 2. Build a URL from components
 * 3. Parse query string parameters
 * 4. Stringify an object to query string
 * 5. Handle URL encoding/decoding
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 7: Error Handling and Logging
// ============================================================================

console.log('📝 Exercise 7: Error Handling and Logging');
console.log('========================================');

/**
 * TODO: Implement proper error handling:
 * 1. Create a function that handles file operations with try/catch
 * 2. Implement custom error classes
 * 3. Create a logging function with timestamps
 * 4. Handle uncaught exceptions
 * 5. Implement graceful shutdown
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 8: Advanced Node.js Concepts
// ============================================================================

console.log('📝 Exercise 8: Advanced Node.js Concepts');
console.log('=======================================');

/**
 * TODO: Implement advanced concepts:
 * 1. Create a simple module with exports
 * 2. Use require() to load your module
 * 3. Implement a simple caching mechanism
 * 4. Create a configuration manager
 * 5. Build a simple command-line tool
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 9: File System Project
// ============================================================================

console.log('📝 Exercise 9: File System Project');
console.log('=================================');

/**
 * TODO: Build a simple file manager:
 * 1. Create a function to list all files in a directory
 * 2. Create a function to copy files
 * 3. Create a function to delete files safely
 * 4. Create a function to search for files by extension
 * 5. Create a function to get file statistics
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 10: Real-world Application
// ============================================================================

console.log('📝 Exercise 10: Real-world Application');
console.log('=====================================');

/**
 * TODO: Build a simple note-taking application:
 * 1. Create a function to add a new note
 * 2. Create a function to list all notes
 * 3. Create a function to read a specific note
 * 4. Create a function to delete a note
 * 5. Create a function to search notes by content
 */

// Your code here:

console.log('\n');

// ============================================================================
// SOLUTION CHECKER
// ============================================================================

/**
 * Uncomment and modify the test cases below to check your solutions
 */

// Example test case:
// function testFileCreation() {
//   try {
//     fs.accessSync('exercise-data.txt');
//     console.log('File creation test: ✅ PASS');
//   } catch (error) {
//     console.log('File creation test: ❌ FAIL');
//   }
// }

// testFileCreation();

console.log('🎉 Node.js exercise session complete!');
console.log('💡 Tip: Uncomment the test cases to verify your solutions');
console.log('📚 Check the solutions in the learning guide if you need help');
console.log('🔧 Try running: node exercises/nodejs-exercises.js'); 