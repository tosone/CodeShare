module.exports = (req, res) => {
  const valiableLang = req.valiableLang;
  const Code = req.model.code;
  let codeid = req.query.id;
  if (req.session.name) {
    Code.findById(codeid)
      .populate({
        path: 'content',
        options: {
          sort: {
            timestamp: "desc"
          },
          limit: 1
        }
      })
      .exec((err, code) => {
        if (err) {
          console.log(err);
          res.json({
            code: 500
          });
        } else {
          res.render('code/edit', {
            title: '修改代码',
            valiableLang: valiableLang,
            user: req.session.name,
            content: code.content[0].content,
            lang: code.lang,
            intro: code.intro,
            id: code._id,
            tags: code.tags
          });
        }
      });
  } else {
    res.redirect("");
  }
}
