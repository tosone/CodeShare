module.exports = function(req, res, next) {
  var commentid = req.body.commentid;
  const valiableLang = req.valiableLang;
  const Comment = req.model.codeComment;
  let content = req.body.content;
  if (req.session.name) {
    if (commentid && content) {
      Comment.findByIdAndUpdate(commentid, {
        content: content
      }, (err) => {
        if (err) {
          res.json({
            code: 500
          });
        } else {
          res.json({
            code: 200
          });
        }
      });
    } else {
      res.json({
        code: 512
      });
    }
  } else {
    res.json({
      code: 501
    });
  }
}
