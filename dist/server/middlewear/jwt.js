'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secrete = process.env.SECRETE;

exports.default = {
  checkToken: function checkToken(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
      return res.status(401).send({ message: 'User not auhorized' });
    } else {
      _jsonwebtoken2.default.verify(token, secrete, function (err, decoded) {
        if (err) {
          return res.status(401).send({ message: 'Token Authentication failed' });
        } else {
          req.decoded = decoded;
          next();
        } //end of else statement
      }); //end of verification
    } //end of else statement
  } //end of check token

}; //end of export default