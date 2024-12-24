const Router = require('@koa/router');

const {register, login} = require('../controller/user.controller');

const usersRouter = new Router({prefix: '/users'});

usersRouter.post('/register', register);

usersRouter.post('/login', login);

module.exports = usersRouter;