/* eslint-disable no-unused-vars */
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.json());

const connectionString = '<<your url>>';

server.listen(4566, () => {
  console.log('Tech-Radar is running....');
});
