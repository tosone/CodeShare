'use strict';
//最新代码列表
module.exports = (context) => {
    const Code = context.model.code;
    const config = context.config;
    return function(userid, page) {
        return new Promise(function(resolve, reject) {
            Code.find()
                .where({
                    user: userid
                })
                .sort({
                    'timestamp': 'desc'
                })
                .skip((parseInt(page) - 1) * config.codepaging)
                .limit(config.codepaging)
                .exec(function(err, val) {
                    resolve(val);
                });
        });
    }
}
