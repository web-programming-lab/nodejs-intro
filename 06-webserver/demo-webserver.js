// Install nodemomon -> npm install nodemon --save-dev
// Start Nodemon --> npx nodemon demo-webserver.js

const http = require('http');

const requestListener = (req, res) => {
    res.end('Hallo web-programming-lab');
}

const server = http.createServer(requestListener);

server.listen(4566, () => console.log("Hello from server 123"));