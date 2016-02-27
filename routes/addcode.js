var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('addcode', {
		title: 'Tosone'
	});
});

router.get('/editor', function(req, res, next) {
	res.render('editor', {
		title: 'editor'
	});
});

module.exports = router;