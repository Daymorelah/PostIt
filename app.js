
/* The heart and soul of the app. The core script of the app. i.e the heart of the app.**/ 

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

app.use('/css', express.static('../template/css'));
app.use('/javascript', express.static('../template/javascript'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// Require our routes into the application.
require('./server/routes')(app);

app.listen(1111, () => {
  console.log('Server is up and listening!... ');
}); 

module.exports = app;
