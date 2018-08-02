const router = require('express').Router();

router.get('/', require('./lib'));
router.get('/login', require('./lib/login'));
router.get('/logout', require('./lib/logout'));

module.exports = router;
