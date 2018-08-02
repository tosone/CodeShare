var router = require('express').Router();

router.post('/add', require('./lib/add'));
router.post('/update', require('./lib/update'));
router.get('/delete', require('./lib/delete'));

module.exports = router;
