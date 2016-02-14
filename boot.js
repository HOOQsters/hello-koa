'use strict';

import Koa from 'koa';

const app = new Koa(),
      listen = () => {
          app.listen(process.env.PORT || 3000, (err) => {
              console.log(err || (process.env.PORT || 3000));
          });
      }

app.use(async (ctx, next) => {
    const hello = 'world';
    ctx.body = { hello };
    await next();
});

app.use(async (ctx, next) => {
    ctx.type = 'application/json';
    ctx.status = 200;
});

export { app, listen };
