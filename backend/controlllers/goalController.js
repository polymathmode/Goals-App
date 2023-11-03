


const getGoals=(req,res)=>{
    if(!req.body.text){
res.status(400)

throw new Error(`Please add a text field`)


    }     
}


const setGoals=(req,res)=>{
    res.status(200).json({message:`Post some freaking goals`})
}
const addGoals=(req,res)=>{
    res.status(200).json({message:`Add some freaking goals ${req.params.id}`})
}
const deleteGoals=(req,res)=>{
    res.status(200).json({message:`Delete some freaking goals ${req.params.id}`})
}

module.exports={
    getGoals,
    setGoals,
    addGoals,
    deleteGoals
}