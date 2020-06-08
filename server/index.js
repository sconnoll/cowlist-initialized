const express = require('express');
const db = require('./db/index');
const model = require('./model');

//Middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Router
const router = require('./router');
//app.get('/api/cows', )

const app = express();
module.exports.app = app;

const port = 3000;


//use middleware
app.use(morgan("dev"));
app.use(express.static('./client/dist'));
app.use(bodyParser.json({extended: true}));

//set up routes
//app.use('/api/cows', router);
app.get('/api/cows', (req, res) => {
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
})

app.post('/api/cows', (req, res) => {
    console.log('post request was made and this is the req body', req.body);
    model.create(req.body, function(err, data) {
        console.log('post request made to database');
        if (err) {  
          console.log('error after hitting database', err);
          res.sendStatus(404);
        } else {
          console.log('this is the data from post request', data);
          res.sendStatus(201);
        }
      });
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`));