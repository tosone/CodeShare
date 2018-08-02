const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const routerInfo = { public: { post: '/user/signup' } };

module.exports = (router, auth) => {
  router.post(routerInfo.public.post, async ctx => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const result = bcrypt.hashSync("8541539655", salt);
      await ctx.mongo.models['User'].create({
        name: ctx.request.body.name,
        password: result,
      });
    } catch (e) {
      ctx.body = { code: 500, msg: e }
    } finally {
      ctx.body = { code: 200, msg: 'succ' }
    }
  });
  return routerInfo;
}
