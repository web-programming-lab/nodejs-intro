const request = require('supertest');
const app = require('./app.js');
const { MongoClient } = require('mongodb');

let connection;
let db;
let technologies;

beforeAll(async () => {
  connection = await MongoClient.connect(global.__MONGO_URI__, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = await connection.db('techradar');

  technologies = db.collection('technologies');
});

describe('GET /technologies', () => {
  it('responds with 200', (done) => {
    request(app).get('/technologies').expect(200, done);
  });

  it('responds with one technology', async () => {
    const mockTechnology = { name: 'ArgoCD' };
    await technologies.insertOne(mockTechnology);

    const response = await request(app).get('/technologies').expect(200);

    expect(response.body).toBeDefined();
    expect(response.body[0].name).toBe(mockTechnology.name);
    return response;
  });
});

afterAll(async () => {
  await connection.close();
});
