// Install nodemomon -> npm install nodemon --save-dev
// Start Nodemon --> npx nodemon demo-webserver.js

const http = require('http');

// Req = IncomingMessage
const requestListener = (req, res) => {
    console.dir(req, {depth: 0});
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({'text': 'Hallo web-programming-lab'}));
    console.dir(res, {depth: 0});
    res.end();
}

const server = http.createServer(requestListener);

server.listen(4566, () => console.log("Server started."));