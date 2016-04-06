'use strict';
//返回用户tags列表
module.exports = (context) => {
    let Code = context.model.code;
    return (userid) => {
        return new Promise((resolve, reject) => {
            Code.find({
                user: userid
            }, (err, val) => {
                var tags = [];
                for (var data of val) {
                    for (var tag of data.tags) {
                        if (tags.indexOf(tag) == -1) {
                            tags.push(tag);
                        }
                    }
                }
                resolve(tags);
            });
        });
    }
}
