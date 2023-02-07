const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const { v4: uuidv4 } = require('uuid');

server.use(bodyParser.json());

const technologies = [];

server.listen(4566, () => {
  console.log('Tech-Radar is running....');
});
