const asyncHandler =require("express-async-handler");
const User=require("../models/userModel");
const jwt=require("jsonwebtoken");
const bcrypt = require("bcrypt")



const createUser=asyncHandler(async(req,res)=>{
       const {email,name,password}=req.body;
   const existingUser=await User.findOne({email});


   if(existingUser){
    res.status(400)
    throw new Error("User with this email already exists");

   }
   const salt= await bcrypt.genSalt(10);
   const hashPassword=await bcrypt.hash(password,salt);


   const newUser=await User.create({
    email,
    name,
    password:hashPassword
   })
   await newUser.save();

   res.status(201).json({
    message:`User created Successfully`,
    newUser
   })

})

module.exports={
    createUser
}
