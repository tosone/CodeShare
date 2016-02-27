var express = require('express');
var router = express.Router();
var lbs = require('node-qqwry');
/* GET home page. */
router.get('/', function(req, res) {
	// for (head in req.headers)
	// 	console.log(head + " " + req.headers[head]);
	res.json({
		host: req.headers['host'],
		ua:req.headers['user-agent']
	})
	console.log("host:" + req.headers["host"])
	console.log(lbs.getArea(req.headers["host"].split(':')[0]))
});
module.exports = router;