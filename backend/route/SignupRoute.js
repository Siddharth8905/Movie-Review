const mongoose=require("mongoose")
const express=require("express")
const router=express.Router()
const SignupController=require("../controller/SignupController")

router.post("/savedata",SignupController.saveData)  //http://localhost:5004/savedata

router.post("/checkdata",SignupController.checkdata)  //http://localhost:5004/checkdata

router.get("/getusers",SignupController.getusers)   //http://localhost:5004/getusers

module.exports=router