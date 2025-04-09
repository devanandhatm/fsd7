var express=require('express');
var router=express.Router();
var productModel=require('./product');

router.post('/',(req,res)=>{
    try {
        console.log(req.body)
        productModel(req.body).save();
        res.send("product added")
        } catch (error) {
       res.send(error) 
    }
})
//api to get
router.get('/get',async(req,res)=>{
    
    try {
        var Data=await productModel.find();
        res.send(Data)
 
    } catch (error) {
        res.send(error)
        
    }
})
//delete
router.delete('/:id',async(req,res)=>{
    try {
      
        await productModel.findByIdAndDelete(req.params.id,req.body);
        res.send("data deleted")
    } catch (error) {
        console.log(error)
    }
})
//update
router.put('/:id',async(req,res)=>{
    try {
      
        await productModel.findByIdAndUpdate(req.params.id,req.body);
        res.send("edited")
    } catch (error) {
        console.log(error)
        
    }
})
module.exports=router