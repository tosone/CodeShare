var express = require('express');
var router = express.Router();

router.get('/user', require('./lib/user')); //用户信息首页
router.get('/setting', require('./lib/user/setting')); //用户个性设置
router.get('/userHeadface', require('./lib/user/userHeadface')); //用户头像设置
router.get('/thirdparty', require('./lib/user/thirdparty')); //第三方账号
router.post('/headface', require('./lib/user/postHeadface')); //头像上传

module.exports = router;
