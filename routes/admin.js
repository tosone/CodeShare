var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('admin_index', {
		title: '博客后台首页'
	});
});
router.get('/editor', function(req, res, next) {
	res.render('admin_artical_editor', {
		title: '文章编辑'
	});
});
router.get('/editor_upload', function(req, res, next) { //
	var title = req.query.title;
	res.json({
		title: req.query.title
	});
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database('blog.db');
	var database_id = 0;
	db.get("SELECT max(id) as uid FROM artical", function(err, row) {
		if (row == undefined) {
			res.json({
				code: 501
			});
		} else {
			if (row.uid == null) {
				database_id = 0;
			} else {
				database_id = row.uid;
			}
		}
	});
	database_id = Number(database_id) + 1;
	db.run("insert into artical values('" + uid + "','" + pwd + "','" + email + "','" + qq + "','" + tel + "','" + time + "')", function() {
		if (this.changes == undefined || this.changes == null)
			res.json({
				code: 501
			});
		else
			res.json({
				code: tmp
			});
	})
});
module.exports = router;