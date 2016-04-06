'use strict';
module.exports = (context) => {
    const Code = context.model.code;
    const valiableLang = context.valiableLang;
    return function(userid) {
        return new Promise(function(resolve, reject) {
            let languages = [];
            Code.distinct("lang", {
                user: userid
            }).exec(function(err, language) {
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
