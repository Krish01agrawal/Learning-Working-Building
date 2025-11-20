const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
console.log(port);
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON data
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/twitter', (req, res)=>{
    res.send('Twitter starts');
});

app.get('/login', (req, res)=>{
    res.send('<h1>Login</h1><form method="post"><input type="text" name="username" placeholder="Username"><input type="password" name="password" placeholder="Password"><button type="submit">Login</button></form>');
});

app.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }
    
    res.send(`Welcome ${username}`);
});

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});