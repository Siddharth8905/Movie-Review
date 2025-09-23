const express=require("express")
const mongoose=require ("mongoose")
const parser=require("body-parser")
const dotenv=require("dotenv")
const cors=require("cors")
const router=require("./route/SignupRoute")

const app=express()
app.use(cors())
app.use(router)
app.use(parser.json())
dotenv.config()
mongoose.connect(process.env.mongo_url)
.then(()=>{console.log("db connected");
})
.catch((error)=>{
    console.log(error);  
})

const port=process.env.port || 5004
app.listen(port,()=>{
    console.log("Connected to port:" + port);
    
})

