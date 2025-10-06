/**
 * HTTP and Web Development Exercises
 * 
 * This file contains practice exercises to reinforce your HTTP and web development learning.
 * Complete each exercise and test your solutions.
 */

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

console.log('🚀 HTTP & Web Development Exercises - Let\'s Practice!\n');

// ============================================================================
// EXERCISE 1: Basic HTTP Server
// ============================================================================

console.log('📝 Exercise 1: Basic HTTP Server');
console.log('===============================');

/**
 * TODO: Create a basic HTTP server that:
 * 1. Listens on port 3000
 * 2. Responds with "Hello, World!" for GET requests to "/"
 * 3. Returns a 404 for unknown routes
 * 4. Logs all incoming requests
 * 5. Handles different HTTP methods
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 2: URL Routing
// ============================================================================

console.log('📝 Exercise 2: URL Routing');
console.log('==========================');

/**
 * TODO: Implement URL routing for:
 * 1. GET /api/users - return a list of users
 * 2. GET /api/users/:id - return a specific user
 * 3. POST /api/users - create a new user
 * 4. PUT /api/users/:id - update a user
 * 5. DELETE /api/users/:id - delete a user
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 3: Request Parsing
// ============================================================================

console.log('📝 Exercise 3: Request Parsing');
console.log('=============================');

/**
 * TODO: Parse different types of requests:
 * 1. Parse query string parameters
 * 2. Parse JSON request body
 * 3. Parse form data
 * 4. Parse URL parameters
 * 5. Handle different content types
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 4: Response Handling
// ============================================================================

console.log('📝 Exercise 4: Response Handling');
console.log('===============================');

/**
 * TODO: Implement proper response handling:
 * 1. Send JSON responses
 * 2. Send HTML responses
 * 3. Set appropriate status codes
 * 4. Set response headers
 * 5. Handle CORS headers
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 5: Static File Serving
// ============================================================================

console.log('📝 Exercise 5: Static File Serving');
console.log('==================================');

/**
 * TODO: Create a static file server that:
 * 1. Serves files from a public directory
 * 2. Handles different file types (HTML, CSS, JS, images)
 * 3. Sets correct MIME types
 * 4. Implements basic caching
 * 5. Handles file not found errors
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 6: RESTful API
// ============================================================================

console.log('📝 Exercise 6: RESTful API');
console.log('==========================');

/**
 * TODO: Build a RESTful API for a todo list:
 * 1. GET /todos - get all todos
 * 2. GET /todos/:id - get a specific todo
 * 3. POST /todos - create a new todo
 * 4. PUT /todos/:id - update a todo
 * 5. DELETE /todos/:id - delete a todo
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 7: Middleware Implementation
// ============================================================================

console.log('📝 Exercise 7: Middleware Implementation');
console.log('=======================================');

/**
 * TODO: Implement middleware functions:
 * 1. Logging middleware
 * 2. Authentication middleware
 * 3. Error handling middleware
 * 4. Request timing middleware
 * 5. Rate limiting middleware
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 8: HTTP Client
// ============================================================================

console.log('📝 Exercise 8: HTTP Client');
console.log('==========================');

/**
 * TODO: Create HTTP client functions:
 * 1. Make GET requests to external APIs
 * 2. Make POST requests with JSON data
 * 3. Handle response data
 * 4. Implement error handling
 * 5. Use promises for async requests
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 9: WebSocket-like Communication
// ============================================================================

console.log('📝 Exercise 9: WebSocket-like Communication');
console.log('==========================================');

/**
 * TODO: Implement server-sent events:
 * 1. Create an endpoint that sends events
 * 2. Keep connection alive
 * 3. Send periodic updates
 * 4. Handle client disconnection
 * 5. Broadcast messages to multiple clients
 */

// Your code here:

console.log('\n');

// ============================================================================
// EXERCISE 10: Complete Web Application
// ============================================================================

console.log('📝 Exercise 10: Complete Web Application');
console.log('=======================================');

/**
 * TODO: Build a complete web application:
 * 1. Create a simple blog API
 * 2. Implement user authentication
 * 3. Add file upload functionality
 * 4. Create a simple frontend
 * 5. Add data validation
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
// function testBasicServer() {
//   const options = {
//     hostname: 'localhost',
//     port: 3000,
//     path: '/',
//     method: 'GET'
//   };
//   
//   const req = http.request(options, (res) => {
//     let data = '';
//     res.on('data', (chunk) => {
//       data += chunk;
//     });
//     res.on('end', () => {
//       console.log('Basic server test:', data.includes('Hello') ? '✅ PASS' : '❌ FAIL');
//     });
//   });
//   
//   req.on('error', (err) => {
//     console.log('Basic server test: ❌ FAIL -', err.message);
//   });
//   
//   req.end();
// }

// testBasicServer();

console.log('🎉 HTTP exercise session complete!');
console.log('💡 Tip: Uncomment the test cases to verify your solutions');
console.log('📚 Check the solutions in the learning guide if you need help');
console.log('🔧 Try running: node exercises/http-exercises.js');
console.log('🌐 Test your servers at: http://localhost:3000'); 