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

   'production':{
    'use_env_variable': 'DATABASE_URL',
    'dialect' : 'postgres',
    'logging': false,
    'ssl'     : true,
    'dialectOptions': {
      ssl: true
    }
  },
 };
