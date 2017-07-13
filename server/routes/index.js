/*
const userController = require('../controllers').users;
const groupController = require('../controllers').groups;*/

import * as controller from '../controllers';


const userController = controller.Users;
const groupController = controller.Groups;


export default (app) => {
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
  // app.get('/api/group/:groupid/message', groupController.getGroupMessage);
};
