var Koa = require('koa');

var app = new Koa();

app.use(function(ctx, next){
  console.log("Got request");
  ctx.body = 'Hello from Node API devops guide';
});

const port = process.env.PORT ? process.env.PORT : 3000

console.log(`Listening to port: ${port}`)
app.listen(port);