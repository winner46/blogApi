const userModel = require('../schema/user.schema')

class LoginServices {
    async findOneuser(username){
        const foundUser = await userModel.findOne({username:username});
        return foundUser;
    }
}

const loginInstance = new LoginServices();
module.exports = loginInstance;