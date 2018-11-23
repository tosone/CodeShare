module.exports = function(req, res) {
  const userid = req.query.id;
  const api = req.api;
  const condition = userid ? {
    user: userid
  } : {};
  api.codeList(condition, {
    'timestamp': 'desc'
  }, req.query.page || 1).then(codelist => {
    api.pages(condition).then(page => {
      res.json({
        codelist: codelist,
        page: page
      });
    });
  });
}