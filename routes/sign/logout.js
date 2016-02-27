var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    req.session.uid = "";
    req.session.email = "";
    req.session.name = false;
    res.redirect('/');
});

module.exports = router;
