const jwt = require('jsonwebtoken');

module.exports = function(req, res) {
  const User = req.model.user;
  const config = req.config;
  let active = req.query.active;
  jwt.verify(active, config.jsonwebtoken, (err, decode) => {
    if (err) {
      console.log(err);
      res.render("signup/mailCheck", {
        title: "邮箱激活失败",
        user: null,
        msg: "账户无法激活，请重新发送邮件",
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
          if (user.email.activeString && user.email.activeString === decode.activeString) {
            user.email.active = true;
            user.save((err) => {
              if (err) {
                res.json({
                  code: 500
                });
              } else {
                req.session.userid = user._id;
                req.session.email = user.email.email;
                req.session.name = user.name;
                if (user.headFace) req.session.headFace = user.headFace;
                res.render("signup/mailCheck", {
                  title: "邮箱激活成功",
                  user: user.name,
                  msg: "邮箱激活成功",
                  active: true
                });
              }
            });
          } else {
            res.render("signup/mailCheck", {
              title: "邮箱激活失败",
              user: null,
              msg: "邮箱激活失败",
              active: false
            });
          }
        }
      });
    }
  });
}
