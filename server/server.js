require("dotenv").config()

const express=require("express")
const cors=require("cors")

const connectDB=require("./database")

const Planet=require("./models/Planet")
const generateLore=require("./ai")

const app=express()

connectDB()

app.use(cors())
app.use(express.json())

app.use(express.static("public"))

app.post("/api/planet",async(req,res)=>{

const name=req.body.name

const lore=await generateLore(name)

const planet=new Planet({

name:name,
type:"generated",
description:lore

})

await planet.save()

res.json(planet)

})

app.get("/api/planets",async(req,res)=>{

const planets=await Planet.find()

res.json(planets)

})

app.listen(3000,()=>{

console.log("Galaxy God Mode running")

})