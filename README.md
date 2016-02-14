## Koa with async await

```js
app.use(async (ctx, next) => {
    const hello = 'world';
    ctx.body = { hello };
    await next();
});

app.use(async (ctx, next) => {
    ctx.type = 'application/json';
    ctx.status = 200;
});
```

Have fun!
