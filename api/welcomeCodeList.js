'use strict';
//点赞最多代码列表
module.exports = (context) => {
    let Code = context.model.code;
    let config = context.config;
    return (userid, page) => {
        return new Promise(function(resolve, reject) {
            var paging = config.codepaging;
            Code.find().where({
                    user: userid
                }).sort({
                    'like': 'desc'
                })
                .skip((parseInt(page) - 1) * config.codepaging)
                .limit(config.codepaging)
                .exec(function(err, val) {
                    resolve(val);
                });
        });
    }
}
