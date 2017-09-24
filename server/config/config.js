module.exports = {
  development: {
    username: 'postgres',
    password: 'andelabootcamp24',
    database: 'test2',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: 'andelabootcamp24',
    database: 'test2',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
}
