import express, { Request, Response } from 'express';
import { MongoClient, ObjectId, Db } from 'mongodb';

const server = express();

// Middleware to parse JSON bodies
server.use(express.json());

const getTechnologyCollection = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
  const client = await MongoClient.connect(uri);
  const db = client.db('techradar');

  return db.collection('technologies');
};

server.get('/technologies', async (req: Request, res: Response) => {
  const technologyCollection = await getTechnologyCollection();
  const result = await technologyCollection.find({}).toArray();
  res.status(200).json(result);
});

server.get('/technologies/:id', async (req: Request, res: Response) => {
  const technologyCollection = await getTechnologyCollection();
  const result = await technologyCollection.findOne({
    _id: new ObjectId(String(req.params.id)),
  });

  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: 'Not found' });
  }
});

server.post('/technologies', async (req: Request, res: Response) => {
  const technologyCollection = await getTechnologyCollection();
  await technologyCollection.insertOne(req.body);
  res.status(201).end();
});


export { server };
