const mySql = require('mysql');
//const Promise = require('bluebird');


const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'Patshansean28',
    database: 'cows'
});

//const db = Promise.promisifyAll(connection, mySql);

connection.connect();

module.exports = connection;