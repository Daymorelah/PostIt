
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('signUpPage.html', { root: '../template/html' });
}); // end of get function

router.post('/api/user/signup', (req, res) => {
});// end of post function

router.get('/login', (req, res) => {
  res.sendFile('loginPage.html', { root: '../template/html' });
});// end of post function

router.post('/api/user/signin', (req, res) => {
  /* let user = req.db ;
    user.create({
    firstName: req.body.username,
    lastName: req.body.password 
    });// end of user.create
  user.findAll().then((users) => {
  console.log(users);
  // res.send(users);
  });// end of find all */
});// end of post function

router.get('/createGroup', (req, res) => {
  res.sendFile('createGroups.html', { root: '../template/html' });
});// end of get function

router.post('/api/group', (req, res) => {
  const details = req.body;
  res.send('You just created a group');
}); // end of post function

router.get('/sndmsg', (req, res) => {
  res.sendFile('sendMessage.html', { root: '../template/html' });
});// end of get function

router.post('/api/group/groupid/message', (req, res) => {
  const details = req.body;
  res.send('You just posted a message to a group');
});// end of get function

router.post('/api/group/groupid/user', (req, res) => {
  const details = req.body;
  res.send('<h1 style="color:blue;font-family:monospace;text-align:center">Added user to group<h1>');
});// end of get function

router.get('/msgbrd', (req, res) => {
  res.sendFile('messageBoard.html', { root: '../template/html' });
});// end of get function

router.get('/api/group/groupid/messages', (req, res) => {
  const details = req.body;
  res.send('You just view the message board');
});// end of get function


export default router;

