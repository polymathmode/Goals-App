const asyncHandler = require("express-async-handler")


const getGoals=asyncHandler(async(req,res)=>{
    if(!req.body.text){
res.status(400)

throw new Error(`Please add a text field`)


    }     
})


const setGoals=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Post some freaking goals`})
})

const addGoals=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Add some freaking goals ${req.params.id}`})
})

const deleteGoals=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete some freaking goals ${req.params.id}`})
})
module.exports={
    getGoals,
    setGoals,
    addGoals,
    deleteGoals
}

// DcSmg0kYwN1NJi3e

// mongodb+srv://myUsername:<password>@cluster1.zsejjad.mongodb.net/?retryWrites=true&w=majority