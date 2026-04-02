const mongoose = require("mongoose")

const WorldSchema = new mongoose.Schema({

    title: String,

    description: String,

    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("World", WorldSchema)