const koaJwt = require('koa-jwt');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const routerInfo = { auth: { get: '/artical/add' } };

module.exports = (router, auth) => {
  router.get(routerInfo.auth.get, auth, async ctx => {
    const salt = bcrypt.genSaltSync(10);
    const result = bcrypt.hashSync("8541539655", salt);
    console.log(result);
    console.log(bcrypt.compareSync("8541539655", result));
    ctx.body = { code: 200, msg: 'add' }
  });

  return routerInfo;
}
