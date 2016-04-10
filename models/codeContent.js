"use strict";

module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    return mongoose.model("codeContent", new Schema({
        code: String,
        content: String,
        timestamp: { //时间戳
            type: Date,
            default: Date.now
        }
    }, {
        versionKey: false
    }));
}
