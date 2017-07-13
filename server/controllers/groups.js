
import db from '../models';

const groupModel = db.groups;
const userModel = db.users;
const groupUsersModel = db.groupUsers;
const messageModel = db.messages;

export default {
  createGroup(req, res) {
    if (req.body.groupName === '') {
      res.status(400).send({ status: false, message: 'Username is required' });
    } else if (req.body.discription === '') {
      res.status(400).send({ status: false, message: 'Username is required' });
    }
    return groupModel
      .create({
        groupName: req.body.groupName,
        discription: req.body.discription,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error.message));
  },
  addUser(req, res) {
    const groupid = req.params.groupid;
    const userToAdd = req.body.id;

    return groupModel.findById(groupid)

      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: 'Group does not exists'
          });
        }
      })
      .then(groupUsersModel.create({
        userID: userToAdd,
        groupID: req.params.groupid,
      }))
      .then(() => res.send('User successfully added to the group'))
      .catch(error => res.status(400).send(error.message));
  },
  list(req, res) {
    return groupModel.all({
      include: [{
        model: userModel,
        as: 'groupMembers'
      }]
    })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(404).send(error.message));
  },
  postMessage(req, res) {
    const groupid = req.params.groupid;
    const messageToPost = req.body.messageBody;
    return groupModel.findById(groupid)
      .then((group) => {
        if (!group) {
          return res.sendStatus(404).send({ message: 'Group not found' });
        }
        messageModel.create({
          messageBody: messageToPost,
          priority: req.body.priority,
          userId: req.body.id,
          groupId: group.id
        });
        return res.send('Message sent');
      })
      .catch(error => res.status(404).send(error.message));
  },
  getGroupMessages(req, res) {
    return groupModel
      .findOne({ where: { id: req.params.id }, include: [{ model: messageModel, attributes: ['messageBody'] }] })
      .then(group => res.status(200).send(group))
      .catch(error => res.status(400).send(error.message));
  }
};
