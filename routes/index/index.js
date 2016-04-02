var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        title: "CodeSnippets - 首页",
        user: req.session.name,
        id: req.session.id
    });
});

module.exports = router;
