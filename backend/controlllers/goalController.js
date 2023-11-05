const asyncHandler = require("express-async-handler")
const Goal=require("../models/goalsModel")

const getGoals=asyncHandler(async(req,res)=>{
    if(!req.body.text){
res.status(400)

throw new Error(`Please add a text field`)

    }    
    const goals=await Goal.find()
    res.status(200).json({
        message:`goals fetched`,
        goals,
        
    }) 
})


const setGoals=asyncHandler(async(req,res)=>{
    const goals=req.body.text
    const createGoals=await Goal.create({
      text:goals
    })
    res.status(200).json({message:`Post some freaking goals`,
     goals
})
})

const addGoals=asyncHandler(async(req,res)=>{
    const createdgoals=req.params.id
    const findGoal=await Goal.findById(createdgoals)

    if(!findGoal){
        res.status(400).json({
            message:`Goal not found`
        })
       
    }
    const updateGoal=await Goal.findByIdAndUpdate(createdgoals,req.body,{ new:true})
    res.status(200).json({
        updateGoal,
    })
})


const deleteGoals = asyncHandler(async (req, res) => {
    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const result=await Goal.deleteOne({_id:goal})
    res.status(200).json({
       id: result
    })
})
  
module.exports={
    getGoals,
    setGoals,
    addGoals,
    deleteGoals
}

// DcSmg0kYwN1NJi3e

// mongodb+srv://myUsername:<password>@cluster1.zsejjad.mongodb.net/?retryWrites=true&w=majority