
/* The heart and soul of the app. The core script of the app. i.e the heart of the app.**/ 
/*
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const sessions = require('express-session'); */

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import sessions from 'express-session';
import routes from './server/routes';

const app = express();

app.use('/css', express.static('../template/css'));
app.use('/javascript', express.static('../template/javascript'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(sessions({
  secret: '£$%$5445&**&(&566**&^&&^6',
  resave: false,
  saveUninitialized: true
}));
app.use('/', routes);

app.listen(1111, () => {
  console.log('Server is up and listening!... ');
});

export default app;
