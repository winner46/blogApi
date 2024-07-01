const {jwtVerify} = require('../authenticate/jwt')

const authToken = async(req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) return res.status(404).send({message: "Token is required"})

        try{
            const decoded = await jwtVerify(token);
            req.user = decoded;
            next();
        }catch(err){
            return res.status(401).send({message: "Invalid token"})
        }
    
}
module.exports = authToken;