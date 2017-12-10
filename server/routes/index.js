import express from 'express';
import path from 'path';
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
  
  app.use(express.static(path.resolve('client','public')));
  app.use(express.static(path.resolve('apiDocDist')));
  //serve API documentation when this route is used.
  app.get('/api/v1/documentation', (req, res)=>{
    res.sendFile('index.html', {root:path.resolve('apiDocDist')});
  });//end of get http method.

  //Serve front-end home page
  app.get('/home', (req, res)=>{
    res.sendFile('index.html', {root:path.resolve('client','public')});
  });//end of get http method

  //Serve front-end sign-up page
  app.get('/signUpPage', (req, res)=>{
    res.sendFile('index.html', {root:path.resolve('client','public')});
  });//end of get http method

  //Serve front-end login page
  app.get('/loginPage', (req, res)=>{
    res.sendFile('index.html', {root:path.resolve('client','public')});
  });//end of get http method

}; //end of arrow function definition

export default routes;