"use strict";

module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    return mongoose.model("code", new Schema({
        user: [{ type: Schema.Types.ObjectId, ref: 'user' }], //用户ID
        intro: String, //简介
        tags: Array, //标签
        lang: String, //类型
        content: String, //代码
        png: String, //代码截图
        like: { //喜欢
            type: Number,
            default: 0
        },
        lookover: { //查看
            type: Number,
            default: 0
        },
        timestamp: { //时间戳
            type: Date,
            default: Date.now
        }
    }, {
        versionKey: false
    }));
}
