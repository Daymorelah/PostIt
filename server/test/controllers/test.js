
import chaiHttp from 'chai-http';
import chai from 'chai';
import models from '../../models';
import app from '../../../app';

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
  describe('Test for API routes to Create a group', () => {
    it('Returns status code created when user creates a group', (done) => {
      chai.request(app).post('/api/group')
        .type('form')
        .send({
          groupName: 'user1',
          discription: 'Welcome',
        })
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    }); it('Returns groupame is required when user doesnt add a group name', (done) => {
      chai.request(app).post('/api/group')
        .type('form')
        .send({
          groupName: '',
          discription: 'Standups',
        })
        .end((err, res) => {
          res.body.message.should.equal('Group name is required');
          done();
        });
    });
  }); // end of inner describe test-suite
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
  describe('Test for API routes to add user to a group', () => {
    it('Returns User successfully added to the group when a user is added to the group', (done) => {
      chai.request(app).post('/api/group/1/user')
        .type('form')
        .send({
          userID: 'User4'
        })
        .end((err, res) => {
          res.body.message.should.equal('User successfully added to the group');
          done();
        });
    }); it('Returns Group does not exists when a user tries to add a user that is not registered', (done) => {
      chai.request(app).post('/api/group/77/user')
        .type('form')
        .send({
          userID: 'user2',
        })
        .end((err, res) => {
          res.body.message.should.equal('Group does not exists');
          done();
        });
    });
  }); // end of inner describe test-suite
});// end of inner describe  test-siute
