
/*The heart and soul of the app. The core script of the app. i.e the heart of the app.**/
/*
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var events = require('events');
var eventsEmitter = new events.EventEmitter();
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();*/
  
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const events = require("events");
const eventsEmitter = new events.EventEmitter();
const routes = require("./routes/index");
const sequelize = require('sequelize');
//const users = require('./routes/users');
const app = express();

app.use("/css",express.static('../template/css'));
app.use("/javascript",express.static('../template/javascript'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

const Sequelize = new sequelize('test2', 'postgres', 'andelabootcamp24', {
  host: 'localhost', dialect: 'postgres', pool: {max: 5,min: 0,idle: 10000}
}); //end of function sequelize */

app.use(function(req,res,next){
  const User = Sequelize.define('user', {
  firstName: {type: sequelize.STRING},
  lastName: {type: sequelize.STRING}
    }); //end of user
         req.db = User;
         next();
            });//end of dabase

app.use("/",routes);

app.listen(1111, function(){
	console.log('Server is up and listening!... ');
});

/*.then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
      console.error('Unable to connect to the database:', err);
      }); //end of catch block*/