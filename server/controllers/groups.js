
const groups = require('../models').group;

module.exports = {
  create(req, res) {
    return groups
      .create({
        groupName: req.body.groupName,
        groupOwner: req.body.groupOwner,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  addUser(req, res) {
    const groupid = req.body.groupid;
    const userToAdd = req.body.user;
    return groups.findOne({
      where: { id: groupid }
    })
      .then(data => res.status(201).send(data + ' ' + groupid + ' ' + userToAdd))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return groups.all()
      .then(data => res.status(201).send(data))
      .catch(error => res.status(404).send(error));
  },
};
