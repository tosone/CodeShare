var express = require('express');
var router = express.Router();

router.get('/', require('./lib/login'));
router.get('/login', require('./lib/login/login'));

module.exports = router;