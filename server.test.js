const request = require('supertest');
const server = require('./server');

describe('GET /', () => {
  afterAll(() => {
    server.close(); // Close server after tests finish
  });

  it('should return a 200 status and success message', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Automated Deployment Successful!");
  });
});

