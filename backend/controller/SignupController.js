const user=require("../model/SignupSchema")
const saveData=async(req,res)=>{
    try {
        const detail=req.body
        const r = await user.findOne(detail)
        if(r){
           return res.json({msg:"exists"})
        }
        const s=await user.create(req.body)
        res.json({msg:"user data saved",s})

    } catch (error) {
        console.log(error);
    }
}

const checkdata=async(req,res)=>{
    try {
        const r=await user.findOne(req.body)
        
        if(r){
            return res.json("registered")
        }
        res.json("not registered")
    } catch (error) {
        
    }
}


const getusers=async(req,res)=>{
    try {
        const r=await user.find();
        res.json(r)
    } catch (error) {
        console.log(error);
    }
}
module.exports={saveData,checkdata,getusers}