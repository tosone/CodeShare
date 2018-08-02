var router = require('express').Router();

router.get('/', require('./lib')); // 注册页面
router.get('/active', require('./lib/active')); // 邮件激活页面
router.get('/userSign', require('./lib/userSign')); // 用户注册处理
router.get('/avaliableID', require('./lib/avaliableID')); // 查看ID是否可用
router.get('/activeEmail', require('./lib/activeEmail')); // 邮件激活处理
router.get('/mailResend', require('./lib/mailResend')); // 邮件重发
router.get('/mailReset', require('./lib/mailReset')); // 邮件重设

router.get('/pwd', require('./lib/pwd')); // 密码找回页面
router.get('/pwdBackHandle', require('./lib/pwdBackHandle')); // 密码找回处理
router.get('/pwdBack', require('./lib/pwdBack')); // 密码重设
router.get('/pwdReset', require('./lib/pwdReset'));
module.exports = router;
