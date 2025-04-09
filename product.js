var mongoose = require('mongoose');
const router =require ('./routes/userRoute');
var userSchema = mongoose.Schema({
    Pname:String,
    Pquantity:Number,
    PPrice:Number,
    PBrand:String,
    
    
})
var productModel=mongoose.model("product",userSchema)
module.exports=productModel;