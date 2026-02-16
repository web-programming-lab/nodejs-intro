import { app } from '../app';
import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import supertest from 'supertest';

const request = supertest(app);

let mongo: any;
let db: any;
let techradar: any;
let technologies: any;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  const client = await new MongoClient(mongoUri);
  db = client.db('techradar')
  technologies = await db.collection('technologies')
});

/*beforeAll(async () => {
  const connection = await MongoClient.connect('mongodb://127.0.0.1:55243', {});
  db = await connection.db();

  technologies = await db.collection('technologies');
});*/

describe('POST /api/v1/users', () => {

  it('should test db connection', () => {
    technologies.insertOne({name: 'ArgoCD'});
  });

  it('responds with 200', (done) => {
    request.get('/technologies').expect(200, done);
  });

  it('responds with one technology', async () => {
    const mockTechnology = { name: 'ArgoCD' };
    await technologies.insertOne(mockTechnology);

    const response = await request.get('/technologies').expect(200);

    expect(response.body).toBeDefined();
    console.log(response.body);
    expect(response.body[0].name).toBe(mockTechnology.name);
    return response;
  });
});

// runs are all tests in the test suite have completed
afterAll(async () => {
  await mongo.stop();
});
