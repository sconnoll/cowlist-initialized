const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const router = require('./router');


app.use(morgan);
app.use(express.static('./client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.use('/', router);




app.listen(port, () => console.log(`Example app listening on port ${port}!`));