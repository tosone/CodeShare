'use strict';
module.exports = (context) => {
    return {
        userTags: require('./userTags')(context),
        userLangs: require('./userLang')(context),
        pages: require('./pages')(context),        
        codeByVersion: require('./codeByVersion')(context),
        codeList: require('./codeList')(context)
    }
}
