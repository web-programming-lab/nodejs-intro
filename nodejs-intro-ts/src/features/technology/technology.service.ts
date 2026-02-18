import { ObjectId } from 'mongodb';
import { ApplicationDatabase } from '../../database/application-database';
import { Technology } from './technology.types';

export const getAllTechnologies = async () => {
  const { TechnologyCollection } = ApplicationDatabase.getCollections();
  return TechnologyCollection.find({}).toArray();
};

export const getTechnologyById = async (technologyId: string) => {
  const { TechnologyCollection } = ApplicationDatabase.getCollections();

  return await TechnologyCollection.findOne({
    _id: new ObjectId(technologyId),
  });
};

export const postTechnology = async (technology: Technology) => {
  const { TechnologyCollection } = ApplicationDatabase.getCollections();
  return await TechnologyCollection.insertOne(technology);
};

export const errorFunctionality = async () => {
  throw new Error('Custom Error!');
};
