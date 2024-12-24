const Koa = require('koa');

const { koaBody } = require('koa-body');

const usersRouter = require('../router/user.route');

const app = new Koa();

app.use(koaBody());

app.use(usersRouter.routes());

module.exports = app;