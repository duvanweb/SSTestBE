require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DEV_DB_USERNAME,
    "password": process.env.DEV_DB_PASSWORD,
    "database": process.env.DEV_DB_NAME,
    "host": process.env.DEV_DB_HOSTNAME,
    "port": process.env.DEV_DB_PORT,
    "dialect": 'postgres',
    "dialectOptions": {
      "useUTC": false, // for reading from database
    },
    "timezone": '-05:00', // for writing to database,
    "define": {
      "timestamps": false
    },
  },
  "test": {
    "username": process.env.DEV_DB_USERNAME,
    "password": process.env.DEV_DB_PASSWORD,
    "database": process.env.DEV_DB_NAME,
    "host": process.env.DEV_DB_HOSTNAME,
    "port": process.env.DEV_DB_PORT,
    "dialect": 'postgres',
    "dialectOptions": {
      "useUTC": false, // for reading from database
    },
    "timezone": '-05:00', // for writing to database
  },
  "production": {
    "username": process.env.DEV_DB_USERNAME,
    "password": process.env.DEV_DB_PASSWORD,
    "database": process.env.DEV_DB_NAME,
    "host": process.env.DEV_DB_HOSTNAME,
    "port": process.env.DEV_DB_PORT,
    "dialect": 'postgres',
    "dialectOptions": {
      "useUTC": false, // for reading from database
    },
    "timezone": '-05:00', // for writing to database
  },
}
