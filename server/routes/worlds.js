const express = require("express")

const World = require("../models/World")

const router = express.Router()

router.get("/", async (req, res) => {

    const worlds = await World.find().sort({ createdAt: -1 })

    res.json(worlds)

})

router.post("/create", async (req, res) => {

    const { title, description } = req.body

    const world = new World({
        title,
        description
    })

    await world.save()

    res.json(world)

})

module.exports = router