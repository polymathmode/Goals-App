const express = require( "express");
const {errorHandler}=require("./middleware/errorMiddleware")
const dotenv = require("dotenv")  ;

 const Routers =require("./routes/goalRoutes"); 

dotenv.config()

const port=process.env.PORT || 5000
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/goals",Routers)

app.use(errorHandler)


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})



