
import chaiHttp from 'chai-http';
import chai from 'chai';
import models from '../models';
import app from '../../app';

process.env.NODE_Env = 'test';
const should = chai.should();
chai.use(chaiHttp);

describe('PostIt Tests:', () => {
  beforeEach((done) => {
    models.users.destroy({
      where: {},
      truncate: true
    });
    models.groups.destroy({
      where: {},
      truncate: true
    });
    done();
  });
  describe('Test for API routes to Create a user', () => {
    it('Returns status code created when user loggs in', (done) => {
      chai.request(app).post('/api/user/signup')
        .type('form')
        .send({
          username: 'user1',
          password: 'everyday',
          email: 'user1@gmail.com'
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    }); it('Returns Username is required when user doesnt add a user name', (done) => {
      chai.request(app).post('/api/user/signup')
        .type('form')
        .send({
          username: '',
          password: 'everyday',
          email: 'user1@gmail.com'
        })
        .end((err, res) => {
          res.body.message.should.equal('Username is required');
          done();
        });
    });
  }); // end of inner describe test-suite
});// end of inner describe  test-siute
