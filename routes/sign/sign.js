var router = require('express').Router();

router.get('/', require('./lib/sign')); //注册页面
router.get('/active', require('./lib/sign/active')); //邮件激活页面
router.get('/userSign', require('./lib/sign/userSign')); //用户注册处理
router.get('/avaliableID', require('./lib/sign/avaliableID')); //查看ID是否可用
router.get('/mailActive', require('./lib/sign/mailActive')); //邮件激活处理
router.get('/mailResend', require('./lib/sign/mailResend')); //邮件重发
// router.get('/resetMail', require('./lib/sign/resetMail')); //邮件重设

module.exports = router;
