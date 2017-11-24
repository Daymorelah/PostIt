import controller from '../controllers';

const userController = controller.Users;
const groupController = controller.Groups;
const messageController = controller.Messages;

const routes = (app) => {

  app.get('/api/v1', (req, res) => res.status(200).send({
    message: 'Welcome to the PostIt API!',
  }));
  app.post('/api/v1/user/signup', userController.signup);
  app.post('/api/v1/user/login', userController.login);
  app.get('/api/v1/user/list', userController.list);
  app.get('/api/v1/group/list', groupController.listUsers);
  app.post('/api/v1/group', groupController.createGroup);
  app.post('/api/v1/group/:groupid/user', groupController.addUser);
  app.post('/api/v1/group/:groupid/message', messageController.sendMessage);
  app.get('/api/v1/message/list', messageController.getMessages);
  app.get('/api/v1/group/:groupid/messages', groupController.groupMessages);
  
}; //end of arrow function definition

export default routes;