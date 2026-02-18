import { ObjectId } from 'mongodb';
import { ApplicationDatabase } from '../../database/application-database';
import { Technology } from './technology.types';

export const getAllTechnologies = async () => {
  return ApplicationDatabase.getTechnologyCollection().find({}).toArray();
};

export const getTechnologyById = async (technologyId: string) => {
  const technologyCollection = ApplicationDatabase.getTechnologyCollection();

  return await technologyCollection.findOne({
    _id: new ObjectId(technologyId),
  });
};

export const postTechnology = async (technology: Technology) => {
  const technologyCollection = ApplicationDatabase.getTechnologyCollection();
  return await technologyCollection.insertOne(technology);
};

export const errorFunctionality = async () => {
  throw new Error('Custom Error!');
};
