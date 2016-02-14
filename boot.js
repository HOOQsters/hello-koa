'use strict';

import Koa from 'koa';

const app = new Koa(),
      listen = () => {
          app.listen(process.env.PORT || 3000, (err) => {
              console.log(err || (process.env.PORT || 3000));
          });
      }

// catch all
app.use(async (ctx, next) => {
    ctx.body = {};
    ctx.type = 'application/json';
    ctx.status = 200;
});

export { app, listen };
