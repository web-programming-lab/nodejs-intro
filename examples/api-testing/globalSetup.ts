import { MongoMemoryServer } from 'mongodb-memory-server';

declare global {
  // eslint-disable-next-line no-var
  var __MONGOINSTANCE: MongoMemoryServer | undefined;
}

export default async function globalSetup() {
  const instance = await MongoMemoryServer.create({
    instance: {
      dbName: 'techradar',
    },
  });

  global.__MONGOINSTANCE = instance;

  process.env.MONGO_URI = instance.getUri();
}
