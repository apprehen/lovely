import koa from 'koa'
const app = new koa()

app.use(async (ctx, next) => {
  ctx.body = 'Hello World'
})

app.listen(5577, () => {
  console.log('server is running at http://localhost:5577')
})