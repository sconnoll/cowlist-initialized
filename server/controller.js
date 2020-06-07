const model = require('./model');

module.exports = {
  get: (req, res) => {
    model.getAll(function(err, data) {
      if (err) {
        res.sendStatus(404);
      } else {
        //TODO might want to change to res.send(data), and then grab the data once the post request response comes back to the client
        res.render('.././dist/index');
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