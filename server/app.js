
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import logger from 'morgan';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve('client','public')));
app.use(express.static(path.resolve('apiDocDist')));

// app.use( (req, res, next) =>{
//   //'*' is not good for production. Only if the API consumable is for public use.
//   res.header('Access-Control-Allow-Origin', '*'); //allow another domain use ur api.
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();});

if( app.get('env') !== 'test'){/* istanbul ignore next */
  app.use(logger('dev')); 
}



//serve API documentation when this route is used.
app.get('/api/v1/documentation', (req, res)=>{
  res.sendFile('index.html', {root:path.resolve('apiDocDist')});
});//end of get http method.

//Serve front-end
app.get('/', (req, res)=>{
  res.sendFile('index.html', {root:path.resolve('client','public')});
});//end of get http method
//import routes here.

routes(app);

const port = process.env.PORT || 1111;

app.listen(port, () => {
  console.log('Server is up and listening on ... ', port);
});

export default app;
