const express = require("express");

const {getGoals, setGoals, addGoals, deleteGoals}= require("../controlllers/goalController")

 const router = express.Router()



router.route("/").get(getGoals).post(setGoals)
router.route("/:id").put(addGoals).delete(deleteGoals)

 module.exports=router