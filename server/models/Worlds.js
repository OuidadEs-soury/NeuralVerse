const mongoose = require("mongoose")

const WorldSchema = new mongoose.Schema({

name:String,

description:String,

planetType:String,

created:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("World",WorldSchema)