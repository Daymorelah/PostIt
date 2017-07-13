
const userController = require('../controllers').users;
const groupController = require('../controllers').groups;
// const messageController = require('../controllers').messages;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/user/signup', userController.signup);
  app.post('/api/user/signin', userController.signin);
  app.get('/api/user/list', userController.list);
  app.get('/api/group/list', groupController.list);
  app.post('/api/group', groupController.createGroup);
  app.post('/api/group/:groupid/user', groupController.addUser);
  app.post('/api/group/:groupid/message', groupController.postMessage);
  app.get('/api/group/:groupid/message', groupController.getGroupMessage);
};
