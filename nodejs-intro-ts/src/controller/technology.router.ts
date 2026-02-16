import { ObjectId } from 'mongodb';
import { connectDb } from '../server';
import { Response, Request } from 'express';
import { getDb } from '../config/db';

const getTechnology = async (req: Request, res: Response) => {
  const { technologyCollection } = getDb();
  const result = await technologyCollection?.find({}).toArray();
  res.json(result);
};

const getTechnologyById = async (req: Request, res: Response) => {
  const { technologyCollection } = getDb();
  let id = [...req.params.id];

  const result = await technologyCollection?.findOne({
    _id: new ObjectId(id[0]),
  });

  if (result) {
    res.send(result);
  } else {
    res.status(404);
  }
};

const postTechnology = async (req: Request, res: Response) => {
  const { technologyCollection } = getDb();
  const result = await technologyCollection?.insertOne(req.body);

  res.status(201);
  res.json(result);
};

const errorFunctionality = async (req: Request, res: Response) => {
  throw new Error('Custom Error!');
};

export { getTechnology, getTechnologyById, postTechnology, errorFunctionality };
