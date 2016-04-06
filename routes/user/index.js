var express = require('express');
var router = express.Router();

router.get('/user', require('./lib')); //用户信息首页
router.get('/setting', require('./lib/setting')); //用户个性设置
router.get('/userHeadFace', require('./lib/userHeadFace')); //用户头像设置
router.get('/thirdparty', require('./lib/thirdparty')); //第三方账号
router.post('/headFace', require('./lib/postHeadFace')); //头像上传

module.exports = router;
