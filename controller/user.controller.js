const formidable = require("formidable");
const userInstance = require("../services/user.services");

const createUser = async (req, res, next) => {
    // console.log(req.fields)
  const { username, password, role, imageUrl } = req.fields;

  try {
    const data = {
      username: username,
      password: password,
      role: role,
      imageUrl: imageUrl,
    };

    const user = await userInstance.createUser(data);
    res.json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    return res.status(500).json({ message: "Error creating user." });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userInstance.findAlluser();
    res.json(allUsers);
  } catch (err) {
    throw new Error(err);
  }
};
const findOne = async (req, res, next) => {
  try {
    const user = await userInstance.findOneuser(req.params.id);
    res.json(user);
  } catch (err) {
    throw new Error(err);
  }
};
const updateOneUser = async (req,res) => {
    const { username, password, role, imageUrl } = req.fields;

    try{
        const data = {
            username: username,
            password: password,
            role: role,
            imageUrl: imageUrl,
        }
        const id = req.params.id;
        const updateOneUser = await userInstance.updateUser(id,data);
        res.json(updateOneUser);
    }catch(err){
        res.json("Username In Use")
        throw new Error(err)
    }
}
const deleteUser = async (req,res) => {
    try{
        const id = req.params.id;
        const deleteUser = await userInstance.deleteUser(id);
        res.json(deleteUser);
    }catch(err){
        throw new Error(err)
    }
}
module.exports = { findOne, createUser, getAllUsers,deleteUser,updateOneUser };
