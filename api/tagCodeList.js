'use strict';
module.exports = (context) => {
    const config = context.config;
    const Code = context.model.code;
    return (userid, tag, page) => {
        return new Promise((resolve, reject) => {
            Code.find().where({
                    user: userid,
                    tags: tag
                }).skip((parseInt(page) - 1) * config.codepaging)
                .limit(config.codepaging)
                .exec((err, val) => {
                    resolve(val);
                });
        });
    }
}
