
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import logger from 'morgan';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use(express.static(path.resolve('apiDocDIst')));

// app.use( (req, res, next) =>{
  // '*' is not good for production. Only if the API consumable is for public use.
  // res.header('Access-Control-Allow-Origin', '*'); //allow another domain use ur api.
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  // next();});

if( app.get('env') !== 'test'){/* istanbul ignore next */
  app.use(logger('dev')); 
}

routes(app);

app.get('/api/v1/documentation', (req, res)=>{
  res.sendFile('index.html', {root:path.resolve('apiDocDist')});
});

const port = process.env.PORT || 1111;

app.listen(port, () => {
  console.log('Server is up and listening on ... ', port);
});

export default app;
