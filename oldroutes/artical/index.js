var router = require('express').Router();

router.get('/add', require('./lib/add'));
router.get('/list', require('./lib/list'));
router.post('/postAdd', require('./lib/postAdd'));
router.post('/postEdit', require('./lib/postEdit'));

module.exports = router;
