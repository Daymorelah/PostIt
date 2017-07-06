/*The heart and soul of the app. The core script of the app. i.e the heart of the app.**/
  
  "use strict";
  const express = require("express");
  const bodyParser = require("body-parser");
  const cookieParser = require("cookie-parser");
  const path = require("path");
  const events = require("events");
  const eventsEmitter = new events.EventEmitter();
  const routes = require("./routes/index");
//const users = require('./routes/users');
  const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use("/",routes);
//app.use(app.router);
//routes.initialize(app);
//app.use('/users', users);


app.listen(1111, function(){
	console.log('Server is up and listening!... ');
});