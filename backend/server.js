const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const  connectToDb=require("./db/connectToDb")

const PORT=process.env.PORT || 3000
connectToDb()

app.use(express.json())

app.use("/recipe",require("./routes/recipeRoutes"))

app.listen(PORT,(err)=>{
    console.log(`Server is running on port ${PORT}`)
})