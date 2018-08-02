module.exports = function(req, res, next) {
  res.render('user/userHeadFace', {
    title: 'Tosone',
    user: req.session.name
  });
}
