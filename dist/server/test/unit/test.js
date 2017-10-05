'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _controllers = require('../../controllers');

var _controllers2 = _interopRequireDefault(_controllers);

var _models = require('../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiAsPromised2.default);
var expect = _chai2.default.expect;
var userController = _controllers2.default.Users;
var userModel = _models2.default.User;
var req = { body: { username: 'Kelvin' } };

describe('Unit test for the models ', function () {
  describe('Test for the user model ', function () {
    var fakePromise = void 0;
    before(function (done) {
      fakePromise = _q2.default.defer();
      _sinon2.default.stub(userModel, 'findOne').callsFake(function () {
        return fakePromise.promise;
      });
      done();
    });
    it('should be defined as a function', function () {
      expect(userController.signup).to.be.a('function');
    }); //end of it test block
    it('should be defined as a function', function () {
      expect(_q2.default.isPromise(userController.signup(req))).to.be.true;
    }); //end of it test block
    it('should call findOne', function () {
      userController.signup(req);
      expect(userModel.findOne.called).to.be.true;
    }); //end of it test block
    it.only('should resolve with a username', function (done) {
      _sinon2.default.stub(userModel, 'findOne').callsFake(function () {
        fakePromise = _q2.default.defer().promise;
        return fakePromise.resolve('hello again from the stub');
      });
      userController.signup(req).then(function (result) {
        expect(result).to.be.a('string');
        done();
      });
    }); //end of it test block
  }); //end of first inner test suite
}); //end of main test suite