const path = require('path');

const Koa = require('koa');
const glob = require('glob');
const dotenv = require('dotenv');
const koaJwt = require('koa-jwt');
const serve = require('koa-static');
const mongoose = require("mongoose");
const Router = require('koa-router');
const convert = require('koa-convert');
const prettyjson = require('prettyjson');
const bodyParser = require('koa-bodyparser');

dotenv.config();

const config = require('./config');

const app = new Koa();
const router = new Router();
const auth = koaJwt({ secret: config.jwt });

glob(path.join(__dirname, 'routers', '**/*.js'), (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach(file => {
      const routers = require(file)(router, auth);
      for (const type in routers) {
        for (const method in routers[type]) {
          console.log('Register route %s: %s', method.toUpperCase(), routers[type][method]);
        }
      }
    });
  }
});

glob(path.join(__dirname, 'models', '**/*.js'), (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach(file => {
      require(file)(mongoose);
    });
  }
});

app.use((ctx, next) => {
  ctx.set('Result-Code', '0');
  const start = new Date();
  return next().then(() => {
    const ms = new Date() - start;
    console.log('\n----------------------------------------');
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    if (ctx.method == 'GET') {
      console.log('Request querystring:', ctx.request.querystring);
    } else if (ctx.method == 'POST') {
      console.log('Request body:');
      console.log(prettyjson.render(ctx.request.body));
    }
    console.log(`Response body(${ctx.response.status}):`);
    console.log(ctx.response.body === undefined ? '' : prettyjson.render(ctx.response.body, { numberColor: 'white' }, 2));
    console.log('----------------------------------------');
  });
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.context.mongo = mongoose;
app.context.config = config;

app.use(serve('build'));

mongoose.connect(config.mongodb, { useNewUrlParser: true }).then(() => {
  app.listen(config.port, () => {
    console.log(`Server running at http://127.0.0.1:${config.port}.`);
  });
}, err => {
  console.log(err);
})
