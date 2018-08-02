module.exports = function(req, res) {
  const User = req.model.user;
  let name = req.query.name;
  if (name.match(/[~=/*&%#%$\\<>]/gi)) {
    res.json({
      code: 502
    });
  } else {
    User.findOne({
      name: name
    }, (err, val) => {
      if (err) {
        res.json({
          code: 514
        });
      } else {
        if (val) {
          res.json({
            code: 500
          });
        } else {
          res.json({
            code: 200
          });
        }
      }
    });
  }
}
