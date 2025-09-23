const mongoose=require("mongoose")
const express=require("express")
const router=express.Router()
const SignupController=require("../controller/SignupController")

router.post("/savedata",SignupController.saveData)//http://localhost:5004/savedata

module.exports=router