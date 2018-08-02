module.exports = mongoose => {
  return mongoose.model('Code', {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    intro: String, // 简介
    tags: Array, // 标签
    lang: String, // 类型
    content: [{ type: mongoose.Schema.Types.ObjectId, ref: 'codeContent' }], // 代码
    like: { type: Number, default: 0 }, // 喜欢
    lookover: { type: Number, default: 0 }, // 查看
    timestamp: { type: Date, default: Date.now } // 时间戳
  });
};
