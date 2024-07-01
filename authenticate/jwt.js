const jwt = require('jsonwebtoken');
const configVariables = require('../config/config')

const jwtToken = async(data)=>{
    const secretkey = configVariables.JWT_SECRET
    try{
        const token = jwt.sign(data,secretkey,{expiresIn: '1h'});
        return token;
    }catch(error){
        return('Error generating token', error);
    }
}
const jwtVerify = async(token)=>{
    const secretkey = configVariables.JWT_SECRET
    try{
        const decoded = jwt.verify(token,secretkey);
        return decoded;
    }catch(error){
        return('Error verifying token', error);
    }
}

module.exports = {jwtToken,jwtVerify};