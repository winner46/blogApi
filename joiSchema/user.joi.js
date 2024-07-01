const joi = require('joi');

const createUserSchema = joi.object({
    username: joi.string().min(3).max(20).required(),
    password: joi.string().min(3).max(20).required(),
    role: joi.string(),
    imageUrl: joi.string()
})
const FindOneUserSchema = joi.object({
    id: joi.string().required()
})
const updateOneUserSchema = joi.object({
    id: joi.string().required(),
    username: joi.string().min(3).max(20),
    password: joi.string().min(3).max(20),
    role: joi.string(),
    imageUrl: joi.string()
})
module.exports = {createUserSchema, FindOneUserSchema,updateOneUserSchema}