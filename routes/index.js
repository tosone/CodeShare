var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
        title: "tosone",
        user: req.session.name
    });
});

module.exports = router;