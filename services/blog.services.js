const blogModel = require('../schema/blog.schema')

class BlogServices {

    async createBlog (BlogInfo){
        const newBlog = new blogModel(BlogInfo);
        const saveBlog = await newBlog.save();
        return saveBlog;
    }
    async findAllBlog(){
        const allBlogs = await blogModel.find();
        return allBlogs;
    }
    async findOneBlog(id){
        const foundBlog = await blogModel.findOne({_id:id});
        return foundBlog;
    }
    async updateBlog(id, blogInfo){
        const updateBlog = await blogModel.findOneAndUpdate ({_id :id}, blogInfo, {new:true});
        return updateBlog;
    }
    async deleteBlog(id){
        const deleteBlog = await blogModel.findOneAndDelete({_id:id});
        return deleteBlog;
    }
}

const blogInstance = new BlogServices();

module.exports = blogInstance;