'use strict';
module.exports = (context) => {
    const config = context.config;
    const Code = context.model.code;
    return (userid, lang, page) => {
        return new Promise((resolve, reject) => {
            Code.find().where({
                    user: userid,
                    lang: lang
                }).skip((parseInt(page) - 1) * config.codepaging)
                .limit(config.codepaging)
                .exec(function(err, val) {
                    resolve(val);
                });
        });
    }
}
