const mongoClient = require('./node_modules/mongodb').MongoClient;
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.json())
