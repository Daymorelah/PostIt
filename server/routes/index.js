import controller from '../controllers';
import auth from '../middlewear/jwt';

const userController = controller.Users;
const groupController = controller.Groups;
const messageController = controller.Messages;
const authenticate = auth.checkToken;

const routes = (app) => {

  app.get('/api/v1', (req, res) => res.status(200).send({
    message: 'Welcome to the PostIt API!',
  }));
  app.post('/api/v1/user/signup', userController.signup);
  app.post('/api/v1/user/login', userController.login);
  app.get('/api/v1/user/list', authenticate, userController.list);
  app.get('/api/v1/group/list', authenticate, groupController.listUsers);
  app.post('/api/v1/group', authenticate, groupController.createGroup);
  app.post('/api/v1/group/:groupid/user', authenticate, groupController.addUser);
  app.post('/api/v1/group/:groupid/message', authenticate, messageController.sendMessage);
  app.get('/api/v1/message/list', authenticate, messageController.getMessages);
  app.get('/api/v1/group/:groupid/messages', authenticate, groupController.groupMessages);
  
}; //end of arrow function definition

export default routes;