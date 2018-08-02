module.exports = mongoose => {
  return mongoose.model('User', {
    name: String, // 登录名
    password: String, // 密码
    email: {
      email: String, // 邮箱
      active: { type: Boolean, default: false },
      activeString: String
    },
    qq: String, // QQ
    tel: String, // 电话
    headFace: String, // 头像
    score: { type: Number, default: 0 }, // 网站内的 score
    signupTimestamp: { type: Date, default: Date.now }, // 注册时间
    lastSignin: { type: Date, default: Date.now } // 上次登录时间
  });
};
