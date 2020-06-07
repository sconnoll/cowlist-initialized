const controller = require('./controller');
const router = require('express').Router();

router.get('/', controller.get);




module.exports = router;