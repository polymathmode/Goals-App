const express=require("express");
const router=express.Router()

const {loginUser,createUser,getUser}=require("../controlllers/userController")



router.route("/").post(createUser)


module.exports=router
