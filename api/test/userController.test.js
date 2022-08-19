import supertest from 'supertest';
import * as database from './database.js';
import api from '../api.js';

const agent = supertest.agent(api);

describe('Register User', () => {
  test('Create User', async () => {
    await database.connect();
    const response = await agent.post('/register').send({
      email: 'test@email.com',
      password: '123',
      name: 'Test Name',
    });
    expect(response.statusCode).toEqual(200);
    await database.close();
  });
});
