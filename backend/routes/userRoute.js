const express=require("express");
const router=express.Router()
const auth =require("../middleware/authMiddleware")

const {login,createUser, getUser}=require("../controlllers/userController")


router.post("/",createUser);

router.post("/logIn",login);
router.get("/getuser/:id",auth,getUser)


module.exports=router
