'use strict';
module.exports = (req, res) => {
  const valiableLang = req.valiableLang;
  res.render('code/add', {
    title: 'Tosone',
    valiableLang: valiableLang,
    user: req.session.name
  });
}
