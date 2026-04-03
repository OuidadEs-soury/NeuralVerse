require("dotenv").config()

const express=require("express")
const cors=require("cors")

const connectDB=require("./database")

const worldRoutes=require("./routes/worlds")
const aiRoutes=require("./routes/ai")

const app=express()

connectDB()

app.use(cors())
app.use(express.json())

app.use(express.static("public"))

app.use("/api/worlds",worldRoutes)
app.use("/api/ai",aiRoutes)

app.listen(3000,()=>{

console.log("🚀 NeuralVerse Ultra running")

})