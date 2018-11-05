var Koa = require('koa');

var app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});


const port = process.env.PORT ? process.env.PORT : 3000

console.log(`Listening to port: ${port}`)
app.listen(port);