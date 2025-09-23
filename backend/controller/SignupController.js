const user=require("../model/SignupSchema")
const saveData=async(req,res)=>{
    try {
        console.log("hi");
        const s=new user(req.body)
        const r=await s.save()
        console.log(r.data);
        res.json({msg:"user data saved",s})
    } catch (error) {
        console.log(error);
    }
}

module.exports={saveData}