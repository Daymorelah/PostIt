
const supertest = require('supertest');
const expect = require('chai').expect;

const server = supertest.agent('http://localhost:1111');

describe('Test for API routes', () => {
  this.timeout(99000);
  it('Return something', () => {
    server.post('/api/user/signup')
      .set('Accept', 'application')
      .expect(200, done);
  });
})
;