module.exports = context => {
  return {
    tags: require("./tags")(context),
    langs: require("./lang")(context),
    pages: require("./pages")(context),
    codeByVersion: require("./codeByVersion")(context),
    codeList: require("./codeList")(context),
    hotLangContent: require("./hotLangContent")(context),
    hotLangList: require("./hotLangList")(context),
    hotTags: require("./hotTags")(context)
  };
};
