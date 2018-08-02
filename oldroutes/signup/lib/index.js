module.exports = (req, res) => {
  res.render('signup/signup', {
    title: "新用户注册",
    user: req.session.name
  });
}
