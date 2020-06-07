const db = require('./db/index');
const Promise = require('bluebird');

var exports = Promise.promisifyAll(module.exports);

exports = {
  getAll: function(handleResults) {
    db.queryAsync(`SELECT cow_name, cow_description FROM cows`)
      .then((allCows) => {
        handleResults(null, allCows);
      })
      .catch(err => {
        handleResults(err);
      })
  }, 

  get: function (body) {
    db.queryAsync(`SELECT cow_name, cow_description FROM cows WHERE cow_name=${body.name}`)
      .then((cow) => {
        handleResults(null, cow);
      })
      .catch((err) => {
        handleResults(err);
      })
  },

  create: function(body, handleResults) {
    db.queryAsync(`INSERT INTO cows (cow_name, cow_description) VALUES (${body.name}, ${body.description}`)
      .then((data) => {
        handleResults(null, data);
      })
  }, 

  update: function(body, handleResults) {

  },

  delete: function() {

  }
}