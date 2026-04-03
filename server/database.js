const mongoose = require("mongoose")

async function connectDB(){

await mongoose.connect("mongodb://127.0.0.1:27017/neuralverse")

console.log("🌌 database connected")

}

module.exports = connectDB