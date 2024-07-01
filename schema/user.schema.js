const {type} = require('express/lib/response')
const mongoose = require('mongoose')
const passwordAuth = require('../authenticate')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    imageUrl:{
        type: String,
        default:null,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
userSchema.pre('save', async function(next){
    const user = this
    if(!user.isModified('password')) return next();

    try{
        const password = await passwordAuth.hashPassword(user.password)
        user.password = password
        next()
    }catch(err){
        throw next(err)
    }
})
const userModel =  mongoose.model('Users', userSchema);
module.exports = userModel;