const moment = require('moment');

module.exports = (req, res) => {
  const codeByVersion = req.api.codeByVersion;

  let codeid = req.query.id;
  let versionfrom = req.query.from;
  let versionto = req.query.to;
  codeByVersion(codeid, versionfrom).then((codefrom) => {
    codeByVersion(codeid, versionto).then((codeto) => {
      console.log(codefrom);
      res.render('code/compare', {
        title: 'Tosone',
        user: req.session.name,
        codefrom: codefrom.content[0].content,
        codeto: codeto.content[0].content,
        lang: codeto.lang,
        like: codeto.like,
        codeid: codeid,
        codefromtimestamp: codefrom.content[0].timestamp,
        codetotimestamp: codeto.content[0].timestamp,
        moment: moment
      });
    });
  })

}
