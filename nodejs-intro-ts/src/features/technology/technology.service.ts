import { ObjectId } from 'mongodb';
import { ApplicationDatabase } from '../../database/application-database';
import { Technology } from './technology.types';

export const getAllTechnologies = async () => {
  const { TECHNOLOGY } = ApplicationDatabase.getCollections();
  return TECHNOLOGY.find({}).toArray();
};

export const getTechnologyById = async (technologyId: string) => {
  const { TECHNOLOGY } = ApplicationDatabase.getCollections();

  return await TECHNOLOGY.findOne({
    _id: new ObjectId(technologyId),
  });
};

export const postTechnology = async (technology: Technology) => {
  const { TECHNOLOGY } = ApplicationDatabase.getCollections();
  return await TECHNOLOGY.insertOne(technology);
};

export const errorFunctionality = async () => {
  throw new Error('Custom Error!');
};
