var express = require('express');
var dotenv=require('dotenv');
var userRoutes=require('./user')
var productRoutes=require('./routes/productRoute')
var app=express();
dotenv.config();
require('/.db')
app.use(express.json());
var port = process.env.port;
var port=4000;

app.use('/api',userRoutes)
app.use('/ap',productRoutes)

app.listen(port,(req,res)=>{
    console.log(`server is up and running in ${port}`)
})