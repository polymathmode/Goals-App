const express = require("express");
const auth =require("../middleware/authMiddleware")

const {getGoals, setGoals, addGoals, deleteGoals}= require("../controlllers/goalController")

 const router = express.Router()



router.route("/").get(auth,getGoals).post(auth,setGoals)
router.route("/:id").put(auth,addGoals).delete(auth,deleteGoals)

 module.exports=router