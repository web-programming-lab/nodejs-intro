const mongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const express = require("express");
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

server.post("/technologies", async (req, res) => {
  const client = await mongoClient.connect(connectionString);
  const db = client.db('techradar');
  const collection = db.collection('technologies');
  const result = await collection.save(req.body);
  res.status(201);
  res.end();
});

module.exports = server;