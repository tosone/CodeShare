// 返回某种语言的代码列表
module.exports = function(req, res) {
  const lang = req.query.lang;
  const api = req.api;
  const userid = req.query.id;
  const condition = userid ? {
    user: userid,
    lang: lang
  } : {
    lang: lang
  };
  api.codeList(condition, {
    'timestamp': 'desc'
  }, req.query.page || 1).then(codelist => {
    api.pages(condition).then(page => {
      res.json({
        codelist: codelist,
        page: page
      });
    })
  });
}
