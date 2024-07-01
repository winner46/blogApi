const joi = require('joi');

const createBlogSchema = joi.object({
    title: joi.string().required(),
    author: joi.string().required(),
    content: joi.string(),
})
const FindOneBlogSchema = joi.object({
    id: joi.string().required()
})
const updateOneBlogSchema = joi.object({
    id: joi.string().required(),
    title: joi.string(),
    author: joi.string(),
    content: joi.string(),
    comment: joi.string(),
    likes: joi.string()
})
module.exports = {createBlogSchema, FindOneBlogSchema,updateOneBlogSchema}