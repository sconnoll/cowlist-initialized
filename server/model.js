const db = require('./db/index');
//const Promise = require('bluebird');

//var exports = Promise.promisifyAll(module.exports);

module.exports = {
  getAll: function(handleResults) {
    db.query(`SELECT cow_name, cow_description FROM cows;`, handleResults);
  }, 

  get: function (body) {
    db.query(`SELECT cow_name, cow_description FROM cows WHERE cow_name=${body.name};`, handleResults);
  },

  create: function(body, handleResults) {
    db.query(`INSERT INTO cows(cow_name,cow_description) VALUES("${body.name}","${body.description}");`, handleResults);
  }, 

  update: function(body, handleResults) {

  },

  delete: function() {

  }
}