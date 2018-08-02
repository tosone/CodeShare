// 找回密码处理
module.exports = function(req, res) {
  const User = req.model.user;
  const sendEmail = req.sendEmail;
  const util = req.util;
  const activeString = util.uuid();
  const name = req.query.name;
  User.findOne({
    name: name
  }, (err, val) => {
    if (err) {
      res.json({
        code: 500
      });
    } else {
      if (val) {
        let userid = val._id;
        let email = val.email.email;
        if (val.email.active) {
          res.json({
            code: 500
          });
          sendEmail(userid, email, 'pwdBack', val.pwd);
        } else {
          val.email.activeString = activeString;
          val.save((err) => {
            if (err) {
              res.json({
                code: 500
              });
            } else {
              res.json({
                code: 501
              });
              sendEmail(userid, email, 'active', activeString)
            }
          });
        }
      } else {
        res.json({
          code: 500
        });
      }
    }
  });
}
