
const groups = require('../models').groups;
const users = require('../models').users;
const groupUsers = require('../models').groupUsers;
const Message = require('../models').message;

module.exports = {
  createGroup(req, res) {
    if ((req.body.groupName === '') || (typeof (req.body.groupName) !== 'string')) {
      res.status(400).send({ status: false, message: 'Username is required' });
    } else if ((req.body.groupOwner === '') || (typeof (req.body.groupOwner) !== 'string')) {
      res.status(400).send({ status: false, message: 'Username is required' });
    }
    return groups
      .create({
        groupName: req.body.groupName,
        discriptionr: req.body.discription,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  addUser(req, res) {
    const groupid = req.params.groupid;
    const userToAdd = req.session.user.id;

    return groups.findById(groupid)

      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: 'Group does not exists'
          });
        }
        return res.status(200).send(data);
      })
      .then(groupUsers.create({
        userID: userToAdd,
        groupID: req.params.groupid,
      }))
      .then(() => res.send('User successfully added to the group'))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return groups.all({
      include: [{
        model: users,
        as: 'groupMembers'
      }]
    })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(404).send(error));
  },
  postMessage(req, res) {
    const groupid = req.params.groupid;
    const messageToPost = req.body.messageBody;
    return groups.findById(groupid)
      .then((group) => {
        if (!group) {
          return res.sendStatus(404).send({ message: 'Group not found' });
        }
        Message.create({
          messageBody: messageToPost,
          priority: req.body.priority,
          userId: req.session.user.id,
          groupId: group.id
        });
        return res.send('Message sent');
      })
      .catch(error => res.status(404).send(error));
  },
  getGroupMessages(req, res) {
    return groups
      .findOne({ where: { id: req.params.id }, include: [{ model: Message, as: 'groupMesssage' }] })
      .then(group => res.status(200).send(group))
      .catch(error => res.status(400).send(error));
  }
};
