import dotenv from 'dotenv';
import { MONGODB_CONFIG } from './config/mongodb.config';
import { MongoClient } from 'mongodb';
import { initDb } from './config/db';
import { app } from './app';

// populate process.env with the data in the .env file
dotenv.config();

const PORT = 3000;
const DB_NAME = 'techradar';
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017';

// mongo db database connection function
export const connectDb = async () => {
  const client = await MongoClient.connect(
    MONGODB_CONFIG.fetchConnectionString(process.env.DB_PASSWORD ?? ''),
  );
  const db = client.db(MONGODB_CONFIG.DB_NAME);
  const technologyCollection = db.collection(
    MONGODB_CONFIG.COLLECTIONS.TECHNOLOGY,
  );

  return { db, technologyCollection };
};

const startServer = async () => {
  // await connectDb();
  // const db = await connectToDb(MONGO_URI, DB_NAME);

  console.log('connecting to ');
  console.log(process.env.MONGO_URI ?? 'mongodb://localhost:27017');
  await initDb(
    process.env.MONGO_URI ?? 'mongodb://localhost:27017',
    'techradar',
  );

  app.listen(PORT, () => {
    console.log('Server is running on port 3000');
  });
};

startServer();
