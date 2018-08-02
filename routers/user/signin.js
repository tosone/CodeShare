const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const routerInfo = { public: { post: '/user/signin' } };

module.exports = (router, auth) => {
  router.post(routerInfo.public.post, async ctx => {
    let token = '';
    try {
      const result = await ctx.mongo.models['User'].findOne({ name: ctx.request.body.name }).exec();
      if (bcrypt.compareSync("8541539655", result.password)) {
        token = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          data: {
            name: 'tosone'
          }
        }, ctx.config.jwt);
      }
    } catch (e) {
      ctx.body = { code: 500, msg: e };
    } finally {
      if (token == '') {
        ctx.body = { code: 6001, msg: 'username or password is wrong' };
      } else {
        ctx.body = { code: 200, msg: 'succ', token };
      }
    }
  });
  return routerInfo;
}
