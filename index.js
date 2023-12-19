// index.js

// Importing the built-in 'http' module
const http = require('http');

// Creating an HTTP server that responds with 'Hello, Earth!' for all requests
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Earth!\n');
});

// Listening on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
