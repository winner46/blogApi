const express = require("express");
const { createBlog, findOne, getAllBlogs ,deleteBlog,updateOneBlog} = require("../controller/blog.controller");
const validate = require("../middleware/validator.middleware");
const { createBlogSchema, FindOneBlogSchema,updateOneBlogSchema } = require("../joiSchema/blog.joi");
const authenticate = require("../middleware/authenticate.middleware");
const router = express.Router();

router.post("/", authenticate,validate(createBlogSchema), createBlog);
router.get("/", authenticate, getAllBlogs);
router.get("/:id",authenticate,validate(FindOneBlogSchema), findOne);
router.put("/:id",authenticate,validate(updateOneBlogSchema),updateOneBlog);
router.delete("/:id",authenticate,deleteBlog);

module.exports = router;