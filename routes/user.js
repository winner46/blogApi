const express = require("express");
const { createUser, findOne, getAllUsers ,deleteUser,updateOneUser} = require("../controller/user.controller");
const validate = require("../middleware/validator.middleware");
const { createUserSchema, FindOneUserSchema,updateOneUserSchema } = require("../joiSchema/user.joi");

const router = express.Router();

router.post("/", validate(createUserSchema), createUser);
router.get("/",  getAllUsers);
router.get("/:id",validate(FindOneUserSchema), findOne);
router.put("/:id",validate(updateOneUserSchema),updateOneUser);
router.delete("/:id",deleteUser);

module.exports = router;
