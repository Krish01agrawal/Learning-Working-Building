// ========================================
// NODE.JS FUNDAMENTALS - PHASE 3
// HTTP Servers and Web Development
// ========================================

console.log("🚀 Starting HTTP Server Concepts!");

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

// ========================================
// 1. BASIC HTTP SERVER
// ========================================

console.log("=== BASIC HTTP SERVER ===");

// Create a basic server
const basicServer = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    
    // Set response headers
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Custom-Header', 'Hello from Node.js');
    
    // Send response
    res.end('<h1>Hello from Basic Node.js Server!</h1>');
});

// Start the server
basicServer.listen(3001, () => {
    console.log('✅ Basic server running on http://localhost:3001');
});

// ========================================
// 2. ADVANCED HTTP SERVER WITH ROUTING
// ========================================

console.log("\n=== ADVANCED HTTP SERVER ===");

// Sample data (in real apps, this would be a database)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];

let posts = [
    { id: 1, title: 'First Post', content: 'Hello World!', authorId: 1 },
    { id: 2, title: 'Second Post', content: 'Learning Node.js', authorId: 2 }
];

// Helper function to send JSON response
function sendJSONResponse(res, statusCode, data) {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data, null, 2));
}

// Helper function to send HTML response
function sendHTMLResponse(res, statusCode, html) {
    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.end(html);
}

// Helper function to parse request body
function parseRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                if (req.headers['content-type'] === 'application/json') {
                    resolve(JSON.parse(body));
                } else {
                    resolve(querystring.parse(body));
                }
            } catch (error) {
                reject(error);
            }
        });
        
        req.on('error', reject);
    });
}

// Main request handler
async function handleRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    const query = parsedUrl.query;

    console.log(`${method} ${pathname}`);

    // CORS headers for cross-origin requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests
    if (method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    try {
        // Route: GET / (homepage)
        if (pathname === '/' && method === 'GET') {
            const html = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Node.js HTTP Server</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
                        .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                        .endpoint { background: #f8f9fa; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #007bff; }
                        .method { font-weight: bold; color: #007bff; }
                        .url { font-family: monospace; background: #e9ecef; padding: 2px 6px; border-radius: 3px; }
                        .description { color: #6c757d; margin-top: 5px; }
                        button { background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin: 5px; }
                        button:hover { background: #0056b3; }
                        #result { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px; white-space: pre-wrap; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>🚀 Node.js HTTP Server API</h1>
                        <p>Welcome to your first professional HTTP server! Try the endpoints below:</p>
                        
                        <h2>📋 Available Endpoints:</h2>
                        
                        <div class="endpoint">
                            <div><span class="method">GET</span> <span class="url">/api/users</span></div>
                            <div class="description">Get all users</div>
                            <button onclick="testEndpoint('GET', '/api/users')">Test</button>
                        </div>
                        
                        <div class="endpoint">
                            <div><span class="method">GET</span> <span class="url">/api/users/1</span></div>
                            <div class="description">Get user by ID</div>
                            <button onclick="testEndpoint('GET', '/api/users/1')">Test</button>
                        </div>
                        
                        <div class="endpoint">
                            <div><span class="method">POST</span> <span class="url">/api/users</span></div>
                            <div class="description">Create new user</div>
                            <button onclick="testEndpoint('POST', '/api/users', {name: 'New User', email: 'new@example.com'})">Test</button>
                        </div>
                        
                        <div class="endpoint">
                            <div><span class="method">PUT</span> <span class="url">/api/users/1</span></div>
                            <div class="description">Update user</div>
                            <button onclick="testEndpoint('PUT', '/api/users/1', {name: 'Updated Name'})">Test</button>
                        </div>
                        
                        <div class="endpoint">
                            <div><span class="method">DELETE</span> <span class="url">/api/users/1</span></div>
                            <div class="description">Delete user</div>
                            <button onclick="testEndpoint('DELETE', '/api/users/1')">Test</button>
                        </div>
                        
                        <div class="endpoint">
                            <div><span class="method">GET</span> <span class="url">/api/posts</span></div>
                            <div class="description">Get all posts</div>
                            <button onclick="testEndpoint('GET', '/api/posts')">Test</button>
                        </div>
                        
                        <div id="result"></div>
                    </div>
                    
                    <script>
                        async function testEndpoint(method, url, data = null) {
                            const resultDiv = document.getElementById('result');
                            resultDiv.textContent = 'Loading...';
                            
                            try {
                                const options = {
                                    method: method,
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                };
                                
                                if (data && (method === 'POST' || method === 'PUT')) {
                                    options.body = JSON.stringify(data);
                                }
                                
                                const response = await fetch(url, options);
                                const result = await response.json();
                                
                                resultDiv.textContent = JSON.stringify(result, null, 2);
                            } catch (error) {
                                resultDiv.textContent = 'Error: ' + error.message;
                            }
                        }
                    </script>
                </body>
                </html>
            `;
            sendHTMLResponse(res, 200, html);
            return;
        }

        // API Routes
        if (pathname.startsWith('/api/users')) {
            await handleUsersAPI(req, res, pathname, method, query);
            return;
        }

        if (pathname.startsWith('/api/posts')) {
            await handlePostsAPI(req, res, pathname, method, query);
            return;
        }

        // 404 - Route not found
        sendJSONResponse(res, 404, { error: 'Route not found', path: pathname });

    } catch (error) {
        console.error('Server error:', error);
        sendJSONResponse(res, 500, { error: 'Internal server error' });
    }
}

// Handle user-related API endpoints
async function handleUsersAPI(req, res, pathname, method, query) {
    const userId = pathname.split('/')[3]; // Extract user ID from URL

    switch (method) {
        case 'GET':
            if (userId) {
                // GET /api/users/:id
                const user = users.find(u => u.id === parseInt(userId));
                if (user) {
                    sendJSONResponse(res, 200, user);
                } else {
                    sendJSONResponse(res, 404, { error: 'User not found' });
                }
            } else {
                // GET /api/users
                sendJSONResponse(res, 200, users);
            }
            break;

        case 'POST':
            // POST /api/users
            try {
                const newUser = await parseRequestBody(req);
                
                // Validation
                if (!newUser.name || !newUser.email) {
                    sendJSONResponse(res, 400, { error: 'Name and email are required' });
                    return;
                }

                // Check if email already exists
                if (users.find(u => u.email === newUser.email)) {
                    sendJSONResponse(res, 409, { error: 'Email already exists' });
                    return;
                }

                newUser.id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
                users.push(newUser);
                sendJSONResponse(res, 201, newUser);
            } catch (error) {
                sendJSONResponse(res, 400, { error: 'Invalid request body' });
            }
            break;

        case 'PUT':
            // PUT /api/users/:id
            if (!userId) {
                sendJSONResponse(res, 400, { error: 'User ID required' });
                return;
            }

            try {
                const updates = await parseRequestBody(req);
                const userIndex = users.findIndex(u => u.id === parseInt(userId));
                
                if (userIndex !== -1) {
                    users[userIndex] = { ...users[userIndex], ...updates };
                    sendJSONResponse(res, 200, users[userIndex]);
                } else {
                    sendJSONResponse(res, 404, { error: 'User not found' });
                }
            } catch (error) {
                sendJSONResponse(res, 400, { error: 'Invalid request body' });
            }
            break;

        case 'DELETE':
            // DELETE /api/users/:id
            if (!userId) {
                sendJSONResponse(res, 400, { error: 'User ID required' });
                return;
            }

            const deleteIndex = users.findIndex(u => u.id === parseInt(userId));
            if (deleteIndex !== -1) {
                const deletedUser = users.splice(deleteIndex, 1)[0];
                sendJSONResponse(res, 200, { message: 'User deleted successfully', user: deletedUser });
            } else {
                sendJSONResponse(res, 404, { error: 'User not found' });
            }
            break;

        default:
            sendJSONResponse(res, 405, { error: 'Method not allowed' });
    }
}

// Handle post-related API endpoints
async function handlePostsAPI(req, res, pathname, method, query) {
    const postId = pathname.split('/')[3];

    switch (method) {
        case 'GET':
            if (postId) {
                // GET /api/posts/:id
                const post = posts.find(p => p.id === parseInt(postId));
                if (post) {
                    // Include author information
                    const author = users.find(u => u.id === post.authorId);
                    const postWithAuthor = { ...post, author };
                    sendJSONResponse(res, 200, postWithAuthor);
                } else {
                    sendJSONResponse(res, 404, { error: 'Post not found' });
                }
            } else {
                // GET /api/posts
                const postsWithAuthors = posts.map(post => ({
                    ...post,
                    author: users.find(u => u.id === post.authorId)
                }));
                sendJSONResponse(res, 200, postsWithAuthors);
            }
            break;

        case 'POST':
            // POST /api/posts
            try {
                const newPost = await parseRequestBody(req);
                
                if (!newPost.title || !newPost.content || !newPost.authorId) {
                    sendJSONResponse(res, 400, { error: 'Title, content, and authorId are required' });
                    return;
                }

                // Check if author exists
                if (!users.find(u => u.id === parseInt(newPost.authorId))) {
                    sendJSONResponse(res, 400, { error: 'Author not found' });
                    return;
                }

                newPost.id = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
                posts.push(newPost);
                sendJSONResponse(res, 201, newPost);
            } catch (error) {
                sendJSONResponse(res, 400, { error: 'Invalid request body' });
            }
            break;

        default:
            sendJSONResponse(res, 405, { error: 'Method not allowed' });
    }
}

// Create and start the advanced server
const advancedServer = http.createServer(handleRequest);

advancedServer.listen(3002, () => {
    console.log('✅ Advanced server running on http://localhost:3002');
    console.log('📖 API Documentation available at http://localhost:3002');
});

// ========================================
// 3. STATIC FILE SERVER
// ========================================

console.log("\n=== STATIC FILE SERVER ===");

// Create a simple static file server
const staticServer = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;

    // Default to index.html
    if (pathname === '/') {
        pathname = '/index.html';
    }

    // Security: prevent directory traversal
    if (pathname.includes('..')) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    // Map URL paths to file paths
    const filePath = path.join(__dirname, 'public', pathname);
    
    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
            return;
        }

        // Read and serve the file
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal server error');
                return;
            }

            // Set appropriate content type
            const ext = path.extname(filePath);
            const contentTypes = {
                '.html': 'text/html',
                '.css': 'text/css',
                '.js': 'application/javascript',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.gif': 'image/gif'
            };

            const contentType = contentTypes[ext] || 'text/plain';
            res.setHeader('Content-Type', contentType);
            res.end(data);
        });
    });
});

staticServer.listen(3003, () => {
    console.log('✅ Static file server running on http://localhost:3003');
});

// Create a sample HTML file for the static server
const sampleHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Static File Server</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
        .container { max-width: 600px; margin: 0 auto; text-align: center; }
        h1 { font-size: 3em; margin-bottom: 20px; }
        p { font-size: 1.2em; line-height: 1.6; }
        .feature { background: rgba(255,255,255,0.1); padding: 20px; margin: 20px 0; border-radius: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎉 Static File Server Working!</h1>
        <p>This HTML file is being served by your Node.js static file server.</p>
        
        <div class="feature">
            <h3>✅ What's Working:</h3>
            <p>• HTML file serving</p>
            <p>• CSS styling</p>
            <p>• Proper content types</p>
            <p>• Security measures</p>
        </div>
        
        <div class="feature">
            <h3>🚀 Next Steps:</h3>
            <p>Try adding more files to the 'public' folder and access them via URL!</p>
        </div>
    </div>
</body>
</html>
`;

// Create public directory and sample file
if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
}
fs.writeFileSync('public/index.html', sampleHTML);

// ========================================
// 4. HTTP CLIENT (Making requests)
// ========================================

console.log("\n=== HTTP CLIENT ===");

// Make HTTP requests to our own server
function makeHTTPRequest() {
    const options = {
        hostname: 'localhost',
        port: 3002,
        path: '/api/users',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const req = http.request(options, (res) => {
        console.log(`📡 HTTP Client - Status: ${res.statusCode}`);
        console.log(`📡 HTTP Client - Headers:`, res.headers);

        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log('📡 HTTP Client - Response:', JSON.parse(data));
        });
    });

    req.on('error', (error) => {
        console.error('📡 HTTP Client - Error:', error.message);
    });

    req.end();
}

// Make a request after a short delay
setTimeout(makeHTTPRequest, 1000);

// ========================================
// PRACTICE EXERCISES
// ========================================

console.log("\n=== PRACTICE EXERCISES ===");

// Exercise 1: Create a simple logging middleware
function createLoggingMiddleware() {
    return (req, res, next) => {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${req.method} ${req.url} - ${req.headers['user-agent'] || 'Unknown'}`);
        next();
    };
}

// Exercise 2: Create a rate limiting function
function createRateLimiter(maxRequests, timeWindow) {
    const requests = new Map();
    
    return (req, res, next) => {
        const ip = req.connection.remoteAddress;
        const now = Date.now();
        
        if (!requests.has(ip)) {
            requests.set(ip, []);
        }
        
        const userRequests = requests.get(ip);
        const validRequests = userRequests.filter(time => now - time < timeWindow);
        
        if (validRequests.length >= maxRequests) {
            res.writeHead(429, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Too many requests' }));
            return;
        }
        
        validRequests.push(now);
        requests.set(ip, validRequests);
        next();
    };
}

// Exercise 3: Create a simple authentication middleware
function createAuthMiddleware(validTokens) {
    return (req, res, next) => {
        const token = req.headers.authorization?.replace('Bearer ', '');
        
        if (!token || !validTokens.includes(token)) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Unauthorized' }));
            return;
        }
        
        next();
    };
}

console.log("\n🎉 HTTP Server Concepts Complete! You now have a solid foundation!");
console.log("\n📚 Next Steps:");
console.log("1. Learn Express.js framework");
console.log("2. Study database integration");
console.log("3. Explore authentication and security");
console.log("4. Build real-world applications"); 