const bcrypt = require('bcryptjs');

class PaswordAuth {
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
    async comparePassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }
}

const passwordAuth = new PaswordAuth();

module.exports = passwordAuth;