/*The heart and soul of the app. The core script of the app. i.e the heart of the app.**/

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var events = require('events');
var eventsEmitter = new events.EventEmitter();
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use('/',routes);
app.use('/users', users);


app.listen(1111, function(){
	console.log('Server is up and listening!... ');
});