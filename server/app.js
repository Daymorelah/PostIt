
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if( app.get('env') !== 'test'){/* istanbul ignore next */
  app.use(logger('dev')); 
}

routes(app);

const port = process.env.PORT || 1111;

app.listen(port, () => {
  console.log('Server is up and listening on ... ', port);
});

export default app;
