import { ObjectId } from 'mongodb';
import { Request, Response } from 'express';
import { ApplicationDatabase } from '../shared/application-database';

const getTechnology = async (req: Request, res: Response) => {
  const technologyCollection = ApplicationDatabase.getTechnologyCollection();
  const result = await technologyCollection?.find({}).toArray();
  res.json(result);
};

const getTechnologyById = async (req: Request, res: Response) => {
  const technologyCollection = ApplicationDatabase.getTechnologyCollection();
  let requestId = String(req.params.id);

  const result = await technologyCollection.findOne({
    _id: new ObjectId(requestId),
  });

  if (result) {
    res.send(result);
  } else {
    res.status(404).end();
  }
};

const postTechnology = async (req: Request, res: Response) => {
  const technologyCollection = ApplicationDatabase.getTechnologyCollection();
  const result = await technologyCollection.insertOne(req.body);

  res.status(201);
  res.json(result);
};

const errorFunctionality = async () => {
  throw new Error('Custom Error!');
};

export { getTechnology, getTechnologyById, postTechnology, errorFunctionality };
