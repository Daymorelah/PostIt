 module.exports = {

   'development':{
     'username': 'postgres',
     'password': 'andelabootcamp24',
     'database': 'waleDB',
     'host': '127.0.0.1',
     'dialect': 'postgres',
     'logging': false,
   },

   'test': {
     'username': 'postgres',
     'password': 'andelabootcamp24',
     'database': 'test2',
     'host': '127.0.0.1',
     'dialect': 'postgres',
     'logging': false,
   },

   'productions': {
     'username': process.env.USER,
     'password': process.env.PASSWORD,
     'database': process.env.DATABASE,
     'host'    : process.env.HOST,
     'dialect' : 'postgres',
     'ssl'     : true,
     'dialectOptions': {
       ssl: true
     }
   },
   'production':{
    'use_env_variable': process.env.DATABASE_URL,
    'dialect' : 'postgres',
    'ssl'     : true,
    'dialectOptions': {
      ssl: true
    }
  },
 };
