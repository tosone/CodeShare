// 重新发送邮件或者重设邮件
const jwt = require('jsonwebtoken');
module.exports = function(req, res) {
  const User = req.model.user;
  const token = req.query.token;
  const config = req.config;
  jwt.verify(token, config.jsonwebtoken, (err, decode) => {
    if (err) {
      res.render("signup/pwdReset", {
        title: "邮箱激活失败",
        user: null,
        msg: "链接失效，请重新发送邮件。",
        active: false
      });
    } else {
      User.findById(decode.userid).exec((err, user) => {
        if (err) {
          console.log(err);
          res.json({
            code: 500
          });
        } else {
          req.session.userid = user._id;
          req.session.email = user.email.email;
          req.session.name = user.name;
          if (user.headFace) req.session.headFace = user.headFace;
          res.render("signup/pwdReset", {
            title: "请修改密码",
            user: user.name,
            msg: "请修改密码",
            active: true
          });
        }
      });
    }
  });
}
