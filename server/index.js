const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')


app.use(express.static('./client/dist'))
app.use(bodyParser)


app.get('/', (req, res) => res.render('.././dist/index'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))