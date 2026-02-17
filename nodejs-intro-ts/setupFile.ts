import { ApplicationDatabase } from './src/shared/application-database';

beforeAll(async () => {
  const { MONGO_URI, DB_NAME } = process.env;

  await ApplicationDatabase.init(MONGO_URI!, DB_NAME!);
});

afterAll(async () => {
  await ApplicationDatabase.close();
});
