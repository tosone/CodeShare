module.exports = context => {
  const Code = context.model.code;
  const codeList = require("./codeList")(context);
  const config = context.config;
  const valiableLang = context.valiableLang;
  let retTags = [];

  return () => {
    return new Promise(function(resolve, reject) {
      Code.aggregate().group({
        _id: "$tags",
        total: {
          $sum: 1
        }
      }).limit(6).sort({
        total: "desc"
      }).exec(function(err, tags) {
        tags.map(tag => {
          retTags.push(tag._id);
        });
        resolve(retTags);
      });
    });
  };
};
