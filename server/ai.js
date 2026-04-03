const express = require("express")

const generateWorld = require("../ai")

const router = express.Router()

router.post("/generate",async(req,res)=>{

const {prompt}=req.body

const text=await generateWorld(prompt)

res.json({description:text})

})

module.exports = router