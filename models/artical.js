"use strict";

module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    return mongoose.model("artical", new Schema({
        user: [{ type: Schema.Types.ObjectId, ref: 'user' }], //用户ID
        intro: String, //简介
        title: String, //标签
        content: String,
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
