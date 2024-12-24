const {createUser} = require('../service/user.service');

class userController {
    async register(ctx, next) {
        const {user_name, password} = ctx.request.body;
        const res = await createUser(user_name, password);
        ctx.body = res;
    };

    async login(ctx, next) {
        ctx.body = '333333';
    }
}

module.exports = new userController();