const mySql = require('mysql');
const createTables = require('./schema');
const Promise = require('bluebird');


const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'Patshansean28',
    database: 'cows'
});

const db = Promise.promisifyAll(connection, mySql);

db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));

module.exports = db;