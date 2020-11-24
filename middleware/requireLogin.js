const jwt  = require("jsonwebtoken");
const JWT_SECRET="ererjjfdkfndfdkfjdfsaadofk";

const mongoose=require('mongoose');
const User =mongoose.model("User");

module.exports = (req,res,next)=>{
    const {authorization}=req.headers;
    if(!authorization){
        res.status(400).json({error:"you must be logged in"})
    }
    const token =authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err)
        {
            return res.status(400).json({error:"you must be logged in"});
        }
        const {_id}= payload;
        User.findById(_id).then(userdata=>{
            req.user = userdata; 
            next()
        })
       
    })
 
}