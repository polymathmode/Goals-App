const asyncHandler =require("express-async-handler");
const User=require("../models/userModel");
const bcrypt = require("bcrypt");
const tokenGenerator=require("../helpers/generateToken");



const createUser=asyncHandler(async(req,res)=>{
     const {name,email,password}=req.body;

     if(!email ||!name || !password){
        res.status(400)
        throw new Error(`Add missing field`)
     }
     const existingUser=await User.findOne({email});
      if(existingUser){
        res.status(401)
        throw new Error(`User with email address already exists`);

      }
     const salt=await bcrypt.genSalt(10);
     const hashPassword=await bcrypt.hash(password,salt);

     const newUser=await User.create({
        email,
        name,
        password:hashPassword,

     })
     const token=await tokenGenerator(newUser.id)
      await newUser.save()
      res.status(201).json({
        message:`User created successfully`,
        newUser,
        token
      })
    })

    

     const login=asyncHandler(async(req,res)=>{
        const {email,password}=req.body;
        const user=await User.findOne({email})
        const token= tokenGenerator(user.id)
   if(user && await bcrypt.compare(password,user.password)){
    res.status(200).json({
        message:`Login success`,
        user,
        token
    })
   }
   res.status(400)
   throw new Error(`Invalid credentials`)

    })

    const getUser= asyncHandler(async(req,res)=>{
      const user=await User.findOne({id:req._id});
      if(!user){
        throw new Error(`User not found`);

      }
      res.status(200).json({
        message:`User found`,
        user
      })
    })


   

    module.exports={
        createUser,login,
        getUser
    }
