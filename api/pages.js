'use strict';
module.exports = (context) => {
    const Code = context.model.code;
    const config = context.config;
    return function(userid) {
        return new Promise(function(resolve, reject) {
            Code.count({
                user: userid
            }, function(err, count) {
                resolve(Math.ceil(count / config.codepaging));
            });
        });
    }
}
