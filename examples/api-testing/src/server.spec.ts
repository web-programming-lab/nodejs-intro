import supertest from 'supertest';
import { server } from './server';
import { Collection, Db, MongoClient } from 'mongodb';

const request = supertest(server);

let connection: MongoClient;
let technologies: Collection;

beforeAll(async () => {
  const mongoUri = process.env.MONGO_URI ?? ''; // set in globalSetup.ts

  connection = await MongoClient.connect(mongoUri);
  technologies = connection.db('techradar').collection('technologies');
});

describe('GET /technologies', () => {
  it('responds with 200', async () => {
    const response = await request.get('/technologies');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  it('responds with one technology', async () => {
    const mockTechnology = { name: 'ArgoCD' };
    await technologies?.insertOne(mockTechnology);

    const response = await request.get('/technologies').expect(200);

    expect(response.body).toBeDefined();
    expect(response.body[0].name).toBe(mockTechnology.name);
  });
});

afterAll(async () => {
  await connection?.close();
});
