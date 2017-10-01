
import chai from 'chai';
import chaiHttp from 'chai-http';
//import models from '../../models';
import app from '../../app';

chai.use(chaiHttp);
const expect = chai.expect;

describe('PostIt Tests:', () => {
  // before((done) => {
  //   models.User.destroy({
  //     where: {},
  //     truncate: true
  //   });
  //   models.Group.destroy({
  //     where: {},
  //     truncate: true
  //   });
  //   done();
  // });
  describe.only('Integration tests for User model', () => {
    it('Returns list of users in the database', (done) => {
      chai.request(app).get('/api/v1/user/list')
        .end( (err, res) => {
          expect(true).to.be.true;
          expect(res.status).to.deep.equal(201);
          expect(res.body).to.be.an('array');
          expect(res.body[0]).to.have.property('email');
          expect(res.body[0]).to.have.property('username');
          done();
        });
    }); 
    it('Creates a user in the database', (done) => {
      chai.request(app).post('/api/v1/user/signup').type('form')
        .send({
          username: 'Sheun',
          email: 'Sheungustav@naija.com',
          password: 'password123',
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message','User Sheun created successfully');
          done(err);
        });
    });
    it('Should make a Username Unique', (done) => {
      chai.request(app).post('/api/v1/user/signup').type('form')
        .send({
          username: 'Sheun',
          email: 'Sheungustav@naija.com',
          password: 'password123',
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message','Username already exist');
          done(err);
        });
    });
    it('Should log a registered uer in', (done) => {
      chai.request(app).post('/api/v1/user/login').type('form')
        .send({
          username: 'Sheun',
          password: 'password123',
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message','Login successful');
          done(err);
        });
    });
    it('Should log a registered uer in', (done) => {
      chai.request(app).post('/api/v1/user/login').type('form')
        .send({
          username: 'Sheuns',
          password: 'password123',
        })
        .end((err, res) => {
          //expect(err).to.exist;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message','Username or Password does not exist');
          done(err);
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
