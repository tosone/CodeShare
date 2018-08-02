module.exports = (req, res) => {
  const Code = req.model.code;
  let codeid = req.query.id;

  Code.remove({
    _id: codeid
  }, function(err) {
    if (err) {
      console.log(err);
      res.json({
        code: 500
      });
    } else {
      res.json({
        code: 200
      });
    }
  });
}
