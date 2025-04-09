var express = require('express');
require('./db')
var userRoutes=require('./user')
var productRoutes=require('./routes/productRoute')
var app=express();
app.use(express.json());
var port=4000;

app.use('/api',userRoutes)
app.use('/ap',productRoutes)

app.listen(port,(req,res)=>{
    console.log(`server is up and running in ${port}`)
})