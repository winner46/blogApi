const express = require("express");
const {userLogin } = require("../controller/login.controller");
const validate = require("../middleware/validator.middleware");
const {loginSchema  } = require("../joiSchema/login.joi");

const router = express.Router();

router.post("/", validate(loginSchema), userLogin);
// router.get("/",  getAllUsers);
// router.get("/:id",validate(FindOneUserSchema), findOne);
// router.put("/:id",validate(updateOneUserSchema),updateOneUser);
// router.delete("/:id",deleteUser);

module.exports = router;