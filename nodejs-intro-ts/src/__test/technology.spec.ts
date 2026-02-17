import { app } from '../app';
import supertest from 'supertest';
import { ApplicationDatabase } from '../shared/application-database';

const request = supertest(app);

afterEach(async () => {
  await ApplicationDatabase.getTechnologyCollection().deleteMany({});
});

describe('POST /api/v1/users', () => {
  it('should test db connection', async () => {
    await ApplicationDatabase.getTechnologyCollection().insertOne({
      name: 'ArgoCD',
    });
  });

  it('responds with 200', async () => {
    await request.get('/technologies').expect(200);
  });

  it('responds with one technology', async () => {
    const mockTechnology = { name: 'ArgoCD' };
    await ApplicationDatabase.getTechnologyCollection().insertOne(
      mockTechnology,
    );

    const response = await request.get('/technologies').expect(200);

    expect(response.body).toBeDefined();
    expect(response.body[0].name).toBe(mockTechnology.name);
  });
});
