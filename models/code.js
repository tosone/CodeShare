"use strict";

module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    return mongoose.model("code", new Schema({
        codeid: String, //唯一性id
        uid: String, //用户ID
        intro: String, //简介
        tags: Array, //标签
        lang: String, //类型
        codecon: String, //代码
        png: String, //代码截图
        //喜欢
        like: {
            type: Number,
            default: 0
        },
        //查看
        lookover: {
            type: Number,
            default: 0
        },
        //时间戳
        timestamp: {
            type: Date,
            default: Date.now
        }
    }, {
        versionKey: false
    }));
}