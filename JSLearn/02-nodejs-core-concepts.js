// ========================================
// NODE.JS FUNDAMENTALS - PHASE 2
// Core Node.js Concepts
// ========================================

console.log("🚀 Starting Node.js Core Concepts!");

// ========================================
// 1. NODE.JS GLOBAL OBJECTS
// ========================================

console.log("=== GLOBAL OBJECTS ===");

// __dirname - current directory path
console.log("Current directory:", __dirname);

// __filename - current file path
console.log("Current file:", __filename);

// process - information about current process
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Current working directory:", process.cwd());

// ========================================
// 2. MODULES SYSTEM
// ========================================

console.log("\n=== MODULES SYSTEM ===");

// CommonJS modules (Node.js default)
const fs = require('fs');
const path = require('path');
const http = require('http');

// ES6 modules (alternative syntax)
// import fs from 'fs'; // This would need "type": "module" in package.json

console.log("Loaded modules:", Object.keys(require.cache).length);

// ========================================
// 3. FILE SYSTEM (fs) MODULE
// ========================================

console.log("\n=== FILE SYSTEM OPERATIONS ===");

// Synchronous operations (blocking)
try {
    // Write file synchronously
    fs.writeFileSync('test.txt', 'Hello from Node.js!');
    console.log("✅ File written synchronously");
    
    // Read file synchronously
    const content = fs.readFileSync('test.txt', 'utf8');
    console.log("📖 File content:", content);
    
    // Check if file exists
    const exists = fs.existsSync('test.txt');
    console.log("📁 File exists:", exists);
    
    // Get file stats
    const stats = fs.statSync('test.txt');
    console.log("📊 File size:", stats.size, "bytes");
    console.log("📅 Created:", stats.birthtime);
    
} catch (error) {
    console.error("❌ Error:", error.message);
}

// Asynchronous operations (non-blocking)
console.log("\n--- Asynchronous Operations ---");

// Write file asynchronously
fs.writeFile('async-test.txt', 'Hello from async Node.js!', (err) => {
    if (err) {
        console.error("❌ Write error:", err.message);
    } else {
        console.log("✅ File written asynchronously");
        
        // Read file asynchronously
        fs.readFile('async-test.txt', 'utf8', (err, data) => {
            if (err) {
                console.error("❌ Read error:", err.message);
            } else {
                console.log("📖 Async file content:", data);
                
                // Delete file asynchronously
                fs.unlink('async-test.txt', (err) => {
                    if (err) {
                        console.error("❌ Delete error:", err.message);
                    } else {
                        console.log("🗑️ File deleted asynchronously");
                    }
                });
            }
        });
    }
});

// ========================================
// 4. PATH MODULE
// ========================================

console.log("\n=== PATH OPERATIONS ===");

const filePath = '/users/john/documents/file.txt';

console.log("Original path:", filePath);
console.log("Directory name:", path.dirname(filePath));
console.log("File name:", path.basename(filePath));
console.log("File extension:", path.extname(filePath));
console.log("File name without extension:", path.basename(filePath, path.extname(filePath)));

// Join paths (cross-platform)
const joinedPath = path.join(__dirname, 'data', 'users.json');
console.log("Joined path:", joinedPath);

// Resolve absolute path
const absolutePath = path.resolve('test.txt');
console.log("Absolute path:", absolutePath);

// ========================================
// 5. URL MODULE
// ========================================

console.log("\n=== URL OPERATIONS ===");

const url = require('url');

const sampleUrl = 'https://example.com:8080/path?name=john&age=25#section';

// Parse URL
const parsedUrl = url.parse(sampleUrl, true); // true for query parsing
console.log("Parsed URL:", {
    protocol: parsedUrl.protocol,
    host: parsedUrl.host,
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    pathname: parsedUrl.pathname,
    query: parsedUrl.query,
    hash: parsedUrl.hash
});

// Build URL
const builtUrl = url.format({
    protocol: 'https:',
    hostname: 'api.example.com',
    port: 443,
    pathname: '/users',
    query: { id: 123, type: 'admin' }
});
console.log("Built URL:", builtUrl);

// ========================================
// 6. QUERY STRING MODULE
// ========================================

console.log("\n=== QUERY STRING OPERATIONS ===");

const querystring = require('querystring');

// Parse query string
const queryString = 'name=john&age=25&city=new+york';
const parsedQuery = querystring.parse(queryString);
console.log("Parsed query:", parsedQuery);

// Stringify object to query string
const queryObject = { name: 'jane', age: 30, hobbies: ['reading', 'coding'] };
const stringifiedQuery = querystring.stringify(queryObject);
console.log("Stringified query:", stringifiedQuery);

// ========================================
// 7. EVENTS MODULE
// ========================================

console.log("\n=== EVENTS ===");

const EventEmitter = require('events');

// Create custom event emitter
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Listen for events
myEmitter.on('greet', (name) => {
    console.log(`👋 Hello, ${name}!`);
});

myEmitter.on('data', (data) => {
    console.log(`📊 Received data:`, data);
});

// Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('data', { id: 1, message: 'Hello World' });

// Once listener (fires only once)
myEmitter.once('welcome', () => {
    console.log("🎉 Welcome! This will only show once.");
});

myEmitter.emit('welcome');
myEmitter.emit('welcome'); // This won't trigger

// ========================================
// 8. BUFFER MODULE
// ========================================

console.log("\n=== BUFFER OPERATIONS ===");

// Create buffers
const buffer1 = Buffer.from('Hello World');
const buffer2 = Buffer.alloc(10);
const buffer3 = Buffer.allocUnsafe(10);

console.log("Buffer 1:", buffer1);
console.log("Buffer 1 as string:", buffer1.toString());
console.log("Buffer 1 length:", buffer1.length);

// Buffer operations
const combined = Buffer.concat([buffer1, Buffer.from('!')]);
console.log("Combined buffer:", combined.toString());

// ========================================
// 9. STREAMS (BASIC)
// ========================================

console.log("\n=== STREAMS ===");

// Create a readable stream
const { Readable } = require('stream');

class NumberStream extends Readable {
    constructor(max) {
        super();
        this.max = max;
        this.current = 0;
    }

    _read() {
        if (this.current >= this.max) {
            this.push(null); // End stream
        } else {
            this.push(this.current.toString());
            this.current++;
        }
    }
}

const numberStream = new NumberStream(5);
let streamData = [];

numberStream.on('data', (chunk) => {
    streamData.push(chunk.toString());
    console.log("📥 Received chunk:", chunk.toString());
});

numberStream.on('end', () => {
    console.log("✅ Stream ended. All data:", streamData);
});

// ========================================
// 10. PROCESS MODULE
// ========================================

console.log("\n=== PROCESS OPERATIONS ===");

// Environment variables
console.log("NODE_ENV:", process.env.NODE_ENV || 'development');

// Command line arguments
console.log("Command line args:", process.argv);

// Memory usage
const memUsage = process.memoryUsage();
console.log("Memory usage:", {
    rss: Math.round(memUsage.rss / 1024 / 1024) + ' MB',
    heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024) + ' MB',
    heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024) + ' MB'
});

// ========================================
// PRACTICE EXERCISES
// ========================================

console.log("\n=== PRACTICE EXERCISES ===");

// Exercise 1: Create a function that reads a file and counts words
function countWordsInFile(filename) {
    try {
        const content = fs.readFileSync(filename, 'utf8');
        const words = content.split(/\s+/).filter(word => word.length > 0);
        return words.length;
    } catch (error) {
        console.error("Error reading file:", error.message);
        return 0;
    }
}

// Exercise 2: Create a function that lists all files in a directory
function listFilesInDirectory(dirPath) {
    try {
        const files = fs.readdirSync(dirPath);
        return files.filter(file => fs.statSync(path.join(dirPath, file)).isFile());
    } catch (error) {
        console.error("Error reading directory:", error.message);
        return [];
    }
}

// Exercise 3: Create a simple event emitter for a chat system
class ChatRoom extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
        this.users = [];
    }

    join(user) {
        this.users.push(user);
        this.emit('userJoined', user);
    }

    message(user, message) {
        this.emit('message', { user, message, timestamp: new Date() });
    }
}

const chatRoom = new ChatRoom('General');

chatRoom.on('userJoined', (user) => {
    console.log(`👋 ${user} joined the chat`);
});

chatRoom.on('message', (data) => {
    console.log(`💬 ${data.user}: ${data.message}`);
});

// Test the chat room
chatRoom.join('Alice');
chatRoom.message('Alice', 'Hello everyone!');
chatRoom.join('Bob');
chatRoom.message('Bob', 'Hi Alice!');

console.log("\n🎉 Node.js Core Concepts Complete! Ready for HTTP and networking!"); 