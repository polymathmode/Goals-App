const express = require( "express");
const connectDB=require("./config/db")
const colors=require("colors")


const {errorHandler}=require("./middleware/errorMiddleware")
const dotenv = require("dotenv")  ;

 const goalRoutes =require("./routes/goalRoutes"); 
 const userRoutes=require("./routes/userRoute");
dotenv.config()

const port=process.env.PORT || 5000
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/goals",goalRoutes)
app.use("/api/users",userRoutes)

app.use(errorHandler)

connectDB()


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})



