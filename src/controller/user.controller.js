class userController {
    async register(ctx, next) {
        ctx.body = '123123';
    };

    async login(ctx, next) {
        ctx.body = '333333';
    }
}

module.exports = new userController();