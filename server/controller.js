/************************************
 * NOT USING THIS FILE RIGHT NOW
 ************************************


const model = require('./model');

module.exports = {
  get: (req, res) => {
    console.log('get request was made');
    model.getAll(function(err, data) {
      console.log('get request made to database');
      if (err) {  
        console.log('error after hitting database', err);
        res.sendStatus(404);
      } else {
        console.log('this is the data from get request', data);
        res.send(data);
      }
    });
  },

  post: (req, res) => {
    model.create((err, data) => {
      if (err) {
        res.send('unable to post data to database')
      } else {
        res.sendStatus(201);
      }
    });
  }
}

*/