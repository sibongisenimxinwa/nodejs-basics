/** Create node server */

const http = require('http');

const server = http.createServer((req, res) => {
    /** Routes */

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h2>Home Page</h2>');
        res.end();
    }

    if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h2>About Page</h2>');
        res.end();
    }
});

server.listen('5000', 'localhost', () => {
    console.log('Server running on port 5000');
});

// 127.0.0.1 = localhost
//Port = 5000

