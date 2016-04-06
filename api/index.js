'use strict';
module.exports = (context) => {
    return {
        userTags: require('./userTags')(context),
        userLangs: require('./userLang')(context),
        newCodeList: require('./newCodeList')(context),
        pages: require('./pages')(context),
        welcomeCode: require('./welcomeCodeList')(context)
    }
}
