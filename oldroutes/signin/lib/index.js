module.exports = function(req, res) {
  console.log(req.mongo);
  res.render('signin/signin', {
    title: "用户登录",
    user: req.session.name
  });
}
