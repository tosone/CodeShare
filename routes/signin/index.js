var express = require('express');
var router = express.Router();

router.get('/', require('./lib'));
router.get('/login', require('./lib/login'));
router.get('/logout', function(req, res) {
    req.session.uid = "";
    req.session.email = "";
    req.session.name = false;
    res.redirect('/');
});
module.exports = router;
