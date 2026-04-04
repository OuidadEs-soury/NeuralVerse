const mongoose=require("mongoose")

const PlanetSchema=new mongoose.Schema({

name:String,

type:String,

description:String,

created:{
type:Date,
default:Date.now
}

})

module.exports=mongoose.model("Planet",PlanetSchema)