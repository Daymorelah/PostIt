
const user = require('../models').users;

module.exports = {
  create(req, res) {
    return user
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  signin(req, res) {
    return user.findOne({
      where: { username: req.body.username, password: req.body.password }
    })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return user.all()
      .then(data => res.status(201).send(data))
      .catch(error => res.status(404).send(error));
  },
};
