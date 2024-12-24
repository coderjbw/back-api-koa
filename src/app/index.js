const Koa = require('koa');

const usersRouter = require('../router/user.route');

const app = new Koa();

app.use(usersRouter.routes());

module.exports = app;