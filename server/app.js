

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import sessions from 'express-session';
import routes from './routes';


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

routes(app);

const PORT = process.env.PORT || 1111;

app.listen(PORT, () => {
  console.log('Server is up and listening!... ');
});

export default app;
