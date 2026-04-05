const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static("public"))

function generatePlanetDescription(name){

const descriptions = [

`${name} is a frozen world orbiting a dying star.`,
`${name} hides an ancient alien civilization beneath its oceans.`,
`${name} is covered in glowing crystal forests.`,
`${name} contains massive underground cities built by a lost species.`,
`${name} is a volcanic super planet with rivers of lava.`

]

return descriptions[Math.floor(Math.random()*descriptions.length)]

}

app.post("/api/planet",(req,res)=>{

const {name} = req.body

const description = generatePlanetDescription(name)

res.json({
description
})

})

const PORT = 3000

app.listen(PORT,()=>{

console.log("🚀 NeuralVerse server running on port "+PORT)

})
