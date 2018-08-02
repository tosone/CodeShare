var valiableType = require('util/ValiableType');
module.exports = function(req, res, next) {
  //params codeid for edit
  res.render('artical/add', {
    title: 'Tosone',
    valiableType: valiableType,
    user: req.session.name
  });
}
