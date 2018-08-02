const routerInfo = { auth: { get: '/artical/delete' } };

module.exports = router => {
  router.get(routerInfo.auth.get, async ctx => {
    ctx.body = { code: 200, msg: 'delete' }
  });

  return routerInfo;
}
