'use strict';

import Koa from 'koa';

const app = new Koa(),
      listen = () => {
          const port = process.env.PORT || 3000;
          app.listen(port, (err) => {
              console.log(err || `~> ${port}`);
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
