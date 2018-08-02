module.exports = (req, res) => {
  // todo: 用户登录记录
  req.session.destroy();
  res.redirect('/');
}
