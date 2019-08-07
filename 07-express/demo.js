// npm install express --save
// npm install nodemon --save-dev
// npx nodemon demo.js

const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('hello world');
});

server.get('/about', (req, res) => {
    res.send('this is about');
});

server.listen(4566, () => {
    console.log('a server with express is running....');
});