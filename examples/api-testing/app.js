const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const express = require('express');
const objectId = require('mongodb').ObjectId;
const server = express();

server.use(bodyParser.json());

const connectionString = process.env.MONGO_URL;

server.get('/technologies', async (req, res) => {
  const client = await mongoClient.connect(connectionString);
  const db = client.db('techradar');
  const collection = db.collection('technologies');
  const result = await collection.find({}).toArray();
  res.send(result);
});

server.get('/technologies/:id', async (req, res) => {
  const client = await mongoClient.connect(connectionString);
  const db = client.db('techradar');
  const collection = db.collection('technologies');
  const result = await collection.findOne({ _id: objectId(req.params.id) });

  if (result) {
    res.send(result);
  } else {
    res.status(404);
  }

  res.end();
});

server.post('/technologies', async (req, res) => {
  const client = await mongoClient.connect(connectionString);
  const db = client.db('techradar');
  const collection = db.collection('technologies');
  await collection.insertOne(req.body);

  res.status(201);
  res.end();
});

module.exports = server;
