var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('admin/index', {
		title: '博客后台首页'
	});
});
module.exports = router;