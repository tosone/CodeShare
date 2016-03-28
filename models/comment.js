"use strict";
module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    return mongoose.model("comment", new Schema({
        commentid: String, //评论的唯一性ID
        codeid: String, //评论对象的ID，文章或者代码ID
        divid: String, //评论块的ID
        isFirst: {
            type: Boolean,
            default: false
        },
        //回复对象，内容为userid
        reply: {
            type: String,
            default: ""
        },
        uid: String, //用户ID
        content: String, //评论内容
        //时间戳
        timestamp: {
            type: Date,
            default: Date.now
        }
    }, {
        versionKey: false
    }));
}