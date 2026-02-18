import { app } from '../app';
import supertest from 'supertest';
import { ApplicationDatabase } from '../database/application-database';

const request = supertest(app);

afterEach(async () => {
  const { TECHNOLOGY } = ApplicationDatabase.getCollections();
  await TECHNOLOGY.deleteMany({});
});

describe('GET /technologies', () => {
  it('responds with 200', async () => {
    const response = await request.get('/technologies');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  it('responds with one technology', async () => {
    const mockTechnology = { name: 'ArgoCD' };
    const { TECHNOLOGY } = ApplicationDatabase.getCollections();
    await TECHNOLOGY.insertOne(mockTechnology);

    const response = await request.get('/technologies').expect(200);

    expect(response.body).toBeDefined();
    expect(response.body[0].name).toBe(mockTechnology.name);
  });
});
