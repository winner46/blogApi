const formidable = require("formidable");
const blogInstance = require("../services/blog.services");
const userInstance = require("../services/user.services");

const createBlog = async (req, res, next) => {
    // console.log(req.fields)
  const { title, author, content } = req.fields;
  const user = await userInstance.findUserByUsername(author)
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const data = {
      title: title,
      author: user.username,
      content: content,
    };

    const blog = await blogInstance.createBlog(data);
    res.json(blog);
  } catch (err) {
    console.error("Error creating blog:", err);
    return res.status(500).json({ message: "Error creating blog." });
  }
};
const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await blogInstance.findAllBlog();
    res.json(allBlogs);
  } catch (err) {
    throw new Error(err);
  }
};
const findOne = async (req, res, next) => {
  try {
    const blog = await blogInstance.findOneBlog(req.params.id);
    res.json(blog);
  } catch (err) {
    throw new Error(err);
  }
};
const updateOneBlog = async (req,res) => {
    let { title, author, content,comment,likes } = req.fields;
    const id = req.params.id;
   
    const findBlog = await blogInstance.findOneBlog(id);
    if (!findBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    let comments = findBlog.comment || [];

    if(comment){
          comments.push(comment); ;

    }
    if(author){
        const user = await userInstance.findUserByUsername(author)
        if (!user) {
            return res.status(401).json({ message: "User Does Not Exist" });
          }
          author = user.username;
    }
    if(likes){
        findBlog.likes ++
    }

    try {
      const data = {
        title: title,
        author: author,
        content: content,
        comment:comments,
        likes: findBlog.likes
      };
        const updateOneBlog = await blogInstance.updateBlog(id,data);
        res.json(updateOneBlog);
    }catch(err){
        throw new Error(err)
    }
}
const deleteBlog = async (req,res) => {
    try{
        const id = req.params.id;
        const deleteBlog = await blogInstance.deleteBlog(id);
        res.json(deleteBlog);
    }catch(err){
        throw new Error(err)
    }
}
module.exports = { findOne, createBlog, getAllBlogs,deleteBlog,updateOneBlog };
