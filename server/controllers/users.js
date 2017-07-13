/*
const user = require('../models').users;
const md5 = require('md5');
*/
import md5 from 'md5';
import models from '../models';

const userModel = models.users;

export default {

  signup(req, res) {
    if (req.body.username === '') {
      res.status(400).send({ status: false, message: 'Username is required' });
    } else if (req.body.password === '') {
      res.status(400).send({ status: false, message: 'Password is required' });
    } else if (req.body.email === '') {
      res.status(400).send({ status: false, message: 'Email is required' });
    }
    userModel.findOne({
      where: {
        username: req.body.username,
      },
    })
      .then((userName) => {
        if (userName) {
          res.status(400).send({ status: false, message: 'Username already exist' });
        } else {
          return userModel
            .create({
              username: req.body.username,
              password: md5(req.body.password),
              email: req.body.email,
            })
            .then(data => res.status(201).send(data))
            .catch(error => res.status(400).send(error));
        }
      });
  },
  signin(req, res) {
    if (req.body.username === '') {
      res.status(400).send({ status: false, message: 'Username is required' });
    } else if (req.body.password === '') {
      res.status(400).send({ status: false, message: 'Username is required' });
    }
    return userModel.findOne({
      where: { username: req.body.username, password: md5(req.body.password) }
    })
      .then((User) => {
        if (!User) {
          return res.status(404).send({
            message: 'Invalid Username or Password'
          });
        }
        req.sessions.user = User;
        return res.status(200).send(User);
      })
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return userModel.all()
      .then(data => res.status(201).send(data))
      .catch(error => res.status(404).send(error));
  },
};
