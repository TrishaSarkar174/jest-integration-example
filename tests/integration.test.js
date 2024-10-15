// __tests__/integration.test.js
const request = require('supertest');
const app = require('../app');
const User = require('../models/user');

describe('Users API Integration Tests', () => {
  beforeEach(() => {
    // Reset the users array before each test
    User.reset();
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('John Doe');
  });

  it('should fetch all users', async () => {
    await User.create({ name: 'Jane Doe', email: 'jane@example.com' });
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe('Jane Doe');
  });
});
