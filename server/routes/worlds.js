const express=require("express")

const World=require("../models/World")

const router=express.Router()

router.get("/",async(req,res)=>{

const worlds=await World.find()

res.json(worlds)

})

router.post("/create",async(req,res)=>{

const world=new World(req.body)

await world.save()

res.json(world)

})

module.exports=router