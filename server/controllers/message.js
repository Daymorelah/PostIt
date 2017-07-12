
const message = require('../models').message;

module.exports = {
  addMessage(req, res) {
    const groupId = parseInt(req.params.groupID, 10);
    console.log('================', typeof (groupId));
    return message
      .create({
        messageBody: req.body.messageBody,
        messageAuthor: req.body.messageAuthor,
        groupId,
        priority: req.body.priority,
      })
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return message.all()
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};
