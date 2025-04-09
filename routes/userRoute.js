var express=require('express');
var router=express.Router();
var userModel=require('../user');
router.post('/',(req,res)=>{
    try {
        userModel(req.body).save();
        res.send("user added")
        } catch (error) {
       res.send(error) 
    }
})

//api to login
router.post('/login',async(req,res)=>{
    const user = await userModel.findOne({email:req.body.email})
    if(!user){
        return res.send("user not found")
    }
    try {
        if(user.password==req.body.password){
            res.send("login successfull")
        
        }else{
            res.send("invalid password")
        }
 
    } catch (error) {
        res.send(error)
        
    }
})
module.exports=router