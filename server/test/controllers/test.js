
import chai from 'chai';
import chaiHttp from 'chai-http';
//import {User} from '../../models';
import app from '../../app';

chai.use(chaiHttp);
const expect = chai.expect;
let mytoken = '';

describe('PostIt Tests:', () => {

  describe('Integration tests for User model: ', () => {
    it('Should welcome the user to the API', (done) =>{
      chai.request(app).get('/api/v1')
        .end( (err, res) =>{
          expect(res.status).to.deep.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message','Welcome to the PostIt API!');
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
          if (err) {
            console.log('Error message:',err.message);// ,'Erro:', err);
          }else{
          mytoken += res.body.token;
          console.log('the token is: ', mytoken);
          console.log('res.body.token is: ', res.body.token);
          //expect(err).to.be.null;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message','User Sheun created successfully');
          }
          done();
        });
    });

    it('Returns list of users and groups each user belongs to', (done) => {
      chai.request(app).get('/api/v1/user/list')
        .set('x-access-token', mytoken)
        .end( (err, res) => {
          expect(true).to.be.true;
          expect(res.status).to.deep.equal(201);
          expect(res.body).to.be.an('array');
          expect(res.body[0]).to.have.property('email');
          expect(res.body[0]).to.have.property('groupsForThisUser');
          expect(res.body[0]['groupsForThisUser']).to.be.an('array');
          done();
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

    it('Should loggin a registered user', (done) => {
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

    it('Should authenticate the username before loggin in', (done) => {
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

    it('Should authenticate the password before loggin in', (done) => {
      chai.request(app).post('/api/v1/user/login').type('form')
        .send({
          username: 'Sheun',
          password: 'password12356',
        })
        .end((err, res) => {
          //expect(err).to.exist;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message','Username or Password does not exist');
          done(err);
        });
    });
  }); // end of inner describe test-suite

  describe('Integration test for Group model', () => {

    it('Should create a group', (done) => {
      chai.request(app).post('/api/v1/group')
      .set('x-access-token', mytoken)
      .type('form')
        .send({
          groupName: 'Teen',
          discription: 'Group of teenagers',
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message','Group Teen created sucesfully');
          expect(res.status).to.deep.equal(201);
          done();
        });
    }); 

    it('Should add a user to a group', (done) => {
      chai.request(app).post('/api/v1/group/2/user')
        .set('x-access-token', mytoken)
        .type('form')
        .send({
          id: 3,
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message','User successfully added to the group');
          expect(res.status).to.deep.equal(201);
          done();
        });
    });

    it('Should check if a group exist', (done) => {
      chai.request(app).post('/api/v1/group/8/user')
        .type('form')
        .set('x-access-token', mytoken)
        .send({
          id: 3,
        })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message','Group does not exists');
          expect(res.status).to.deep.equal(201);
          done();
        });
    });

    it('Should list groups with it users ', (done) => {
      chai.request(app).get('/api/v1/group/list')
        .set('x-access-token', mytoken)  
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          expect(res.body[0]).to.have.property('groupName');
          expect(res.body[0]).to.have.property('usersOfThisGroup');
          expect(res.body[0]['usersOfThisGroup'][0]).to.have.property('username');
          expect(res.status).to.deep.equal(201);
          done();
        });
    });

    it('Should list all messages belonging to a paticular group', (done) => {
      chai.request(app).get('/api/v1/group/3/messages')
        .set('x-access-token', mytoken)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('discription');
          expect(res.body).to.have.property('messagesForThisGroup');
          expect(res.body.messagesForThisGroup[0]).to.have.property('body');
          expect(res.status).to.deep.equal(201);
          done();
        });
    });
  }); // end of inner describe test-suite

  describe('Integration test for message model', () => {

    it('should send a message to a group', (done) => {
      chai.request(app).post('/api/v1/group/2/message')  
        .set('x-access-token', mytoken)
        .type('form')
        .send({
          message: 'User4',
          priority: 'Normal'
        })
        .end((err, res) => {
          expect(res.status).to.deep.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message','Message sent to group 2 succesfully');
          done();
        });
    });

    it('should check if a group exist', (done) => {
      chai.request(app).post('/api/v1/group/22/message')
        .set('x-access-token', mytoken)
        .type('form')
        .send({
          message: 'User4',
          priority: 'Normal'
        })
        .end((err, res) => {
          expect(res.status).to.deep.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message','Group not found!');
          done();
        });
    });
    
    it('List messages with the group it belongs to', (done) => {
      chai.request(app).get('/api/v1/message/list')
        .set('x-access-token', mytoken)
        .end((err, res) => {
          expect(res.status).to.deep.equal(201);
          expect(res.body).to.be.an('array');
          expect(res.body[0]).to.have.property('body');
          expect(res.body[0]).to.have.property('priority');
          expect(res.body[0]).to.have.property('group');
          expect(res.body[0]['group']).to.be.an('object');
          expect(res.body[0]['group']).to.have.property('groupName');
          done();
        });
    });
  }); // end of inner describe test-suite
});// end of inner describe  test-siute
