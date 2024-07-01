const login = require('../services/login.services')
const bcrypt = require('../authenticate')
const {jwtToken} = require('../authenticate/jwt')

const userLogin = async (req, res, next) => {
    const {username, password} = req.fields;

    try{
        const getUser = await login.findOneuser(username);
        if(!getUser){
            return res.status(401).json({message: 'Invalid Username'});
        }
        const validatePassword = await bcrypt.comparePassword(password,getUser.password);
        if(!validatePassword){
            return res.status(401).json({message: 'Invalid Password'});
        }
        const data = {
            user_id: getUser.user_id,
            user_role: getUser.role
        }
        const token = await jwtToken(data);
        res.send({token:token});

    }catch(err){
        res.status(500).json({message: err.message})
    }
}
module.exports = {userLogin}