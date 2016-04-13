'use strict';
module.exports = (context) => {
    const Code = context.model.code;
    const valiableLang = context.valiableLang;
    return function(condition) {
        return new Promise(function(resolve, reject) {
            let languages = [];
            Code.distinct("lang", condition).exec(function(err, language) {
                for (var lang of language) {
                    var temp = {};
                    temp[lang] = valiableLang[lang];
                    languages.push(temp);
                }
                resolve(languages);
            });
        });
    }

}
