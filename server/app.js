
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import logger from 'morgan';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve('apiDocDist')));

if( app.get('env') !== 'test'){/* istanbul ignore next */
  app.use(logger('dev')); 
}

app.get('/api/v1/documentation', (req, res)=>{
  res.sendFile('index.html', {root:path.resolve('apiDocDist')});
});//end of get method.

routes(app);

const port = process.env.PORT || 1111;

app.listen(port, () => {
  console.log('Server is up and listening on ... ', port);
});

export default app;
