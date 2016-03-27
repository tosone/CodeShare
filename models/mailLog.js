'use strict';
module.exports = (mongoose) => {
    var Schema = mongoose.Schema;
    return mongoose.model("mailLog", new Schema({
        user_uuid: String,
        email: String,
        isSuccess: {
            type: Boolean,
            default: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }, {
        versionKey: false
    }));
}