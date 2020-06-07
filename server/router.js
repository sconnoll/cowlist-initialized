const controller = require('./controller');
const router = require('express').Router();

router.get('/api/cows', controller.get);

router.post('/api/cows', controller.post);




module.exports = router;