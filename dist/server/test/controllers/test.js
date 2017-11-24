'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);
//import {User} from '../../models';

var expect = _chai2.default.expect;

describe('PostIt Tests:', function () {

  describe('Integration tests for User model', function () {
    it('Should welcome the using the API', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1').end(function (err, res) {
        expect(res.status).to.deep.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Welcome to the PostIt API!');
        done();
      });
    });

    it('Returns list of users and groups each user belongs to', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/user/list').end(function (err, res) {
        expect(true).to.be.true;
        expect(res.status).to.deep.equal(201);
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.have.property('email');
        expect(res.body[0]).to.have.property('groupsForThisUser');
        expect(res.body[0]['groupsForThisUser']).to.be.an('array');
        done();
      });
    });

    it('Creates a user in the database', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/user/signup').type('form').send({
        username: 'Sheun',
        email: 'Sheungustav@naija.com',
        password: 'password123'
      }).end(function (err, res) {
        expect(err).to.be.null;
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'User Sheun created successfully');
        done(err);
      });
    });

    it('Should make a Username Unique', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/user/signup').type('form').send({
        username: 'Sheun',
        email: 'Sheungustav@naija.com',
        password: 'password123'
      }).end(function (err, res) {
        expect(err).to.be.null;
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Username already exist');
        done(err);
      });
    });

    it('Should loggin a registered user', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/user/login').type('form').send({
        username: 'Sheun',
        password: 'password123'
      }).end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Login successful');
        done(err);
      });
    });

    it('Should authenticate the username before loggin in', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/user/login').type('form').send({
        username: 'Sheuns',
        password: 'password123'
      }).end(function (err, res) {
        //expect(err).to.exist;
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Username or Password does not exist');
        done(err);
      });
    });

    it('Should authenticate the password before loggin in', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/user/login').type('form').send({
        username: 'Sheun',
        password: 'password12356'
      }).end(function (err, res) {
        //expect(err).to.exist;
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Username or Password does not exist');
        done(err);
      });
    });
  }); // end of inner describe test-suite

  describe('Integration test for Group model', function () {

    it('Should create a group', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/group').type('form').send({
        groupName: 'Teen',
        discription: 'Group of teenagers'
      }).end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Group Teen created sucesfully');
        expect(res.status).to.deep.equal(201);
        done();
      });
    });

    it('Should add a user to a group', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/group/2/user').type('form').send({
        id: 3
      }).end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'User successfully added to the group');
        expect(res.status).to.deep.equal(201);
        done();
      });
    });

    it('Should check if a group exist', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/group/8/user').type('form').send({
        id: 3
      }).end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Group does not exists');
        expect(res.status).to.deep.equal(201);
        done();
      });
    });

    it('Should list groups with it users ', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/group/list').end(function (err, res) {
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.have.property('groupName');
        expect(res.body[0]).to.have.property('usersOfThisGroup');
        expect(res.body[0]['usersOfThisGroup'][0]).to.have.property('username');
        expect(res.status).to.deep.equal(201);
        done();
      });
    });

    it('Should list all messages belonging to a paticular group', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/group/3/messages').end(function (err, res) {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('discription');
        expect(res.body).to.have.property('messagesForThisGroup');
        expect(res.body.messagesForThisGroup[0]).to.have.property('body');
        expect(res.status).to.deep.equal(201);
        done();
      });
    });
  }); // end of inner describe test-suite

  describe('Integration test for message model', function () {

    it('should send a message to a group', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/group/2/message').type('form').send({
        message: 'User4',
        priority: 'Normal'
      }).end(function (err, res) {
        expect(res.status).to.deep.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Message sent to group 2 succesfully');
        done();
      });
    });

    it('should check if a group exist', function (done) {
      _chai2.default.request(_app2.default).post('/api/v1/group/22/message').type('form').send({
        message: 'User4',
        priority: 'Normal'
      }).end(function (err, res) {
        expect(res.status).to.deep.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Group not found!');
        done();
      });
    });

    it('List messages with the group it belongs to', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/message/list').end(function (err, res) {
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
}); // end of inner describe  test-siute