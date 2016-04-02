"use strict";

module.exports = (mongoose) => {
    const User = mongoose.models.user;
    const Schema = mongoose.Schema;
    return mongoose.model("code", new Schema({
        user: [{ type: Schema.Types.ObjectId, ref: 'user' }], //用户ID
        intro: String, //简介
        title: String, //标签
        content: String,
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
