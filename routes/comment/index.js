var router = require('express').Router();

router.get('/add', require('./lib/add'));
router.get('/update', require('./lib/update'));
router.get('/delete', require('./lib/delete'));

module.exports = router;