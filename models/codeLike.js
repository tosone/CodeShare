"use strict";
module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    return mongoose.model("codeLike", new Schema({
        codeid: String, //代码片段唯一性id
        uid: String, //用户ID
        //时间戳
        timestamp: {
            type: Date,
            default: Date.now
        }
    }, {
        versionKey: false
    }));
}