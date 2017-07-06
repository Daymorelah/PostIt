//"use strict";

var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
 res.sendFile("signUpPage.html",{root:'../template/html'});
});//end of get function

router.post('/api/user/signup',(req,res)=>{
	var details = req.body
 res.send(details);
});//end of get function

router.get('/login',(req,res)=>{
 res.sendFile("loginPage.html",{root:'../template/html'});
});//end of get function

router.post('/api/user/signin',(req,res)=>{
	var details = req.body
 res.send(details);
});//end of get function

router.get('/createGroup',(req,res)=>{
 res.sendFile("createGroups.html",{root:'../template/html'});
});//end of get function

router.post('/api/group',(req,res)=>{
	var details = req.body
 res.send('You just created a group');
}); //end of post function

router.get('/sndmsg',(req,res)=>{
	res.sendFile("sendMessage.html",{root:'../template/html'});
});//end of get function

router.post('/api/group/groupid/message',(req,res)=>{
	var details = req.body
 res.send('You just posted a message to a group');
});//end of get function

router.post('/api/group/groupid/user',(req,res)=>{
	var details = req.body
 res.send('Add user to group');
});//end of get function

router.get('/msgbrd',(req,res)=>{
	res.sendFile("messageBoard.html",{root:'../template/html'});
});//end of get function

router.get('/api/group/groupid/messages',(req,res)=>{
	var details = req.body
 res.send('You just view the message board');
});//end of get function


module.exports = router;

