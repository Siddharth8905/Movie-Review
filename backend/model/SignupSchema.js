const mongoose= require("mongoose")

const dataschema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const data=mongoose.model("userdetails",dataschema)

module.exports=data