
const userController = require('../controllers').users;
const groupController = require('../controllers').groups;
const messageController = require('../controllers').message;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/user/signup', userController.create);
  app.post('/api/user/signin', userController.signin);
  app.get('/api/user/list', userController.list);
  app.post('/api/group', groupController.create);
  app.get('/api/group/list', groupController.list);
  app.post('/api/message/:groupID', messageController.addMessage);
  app.get('/api/message/list', messageController.list);
};
