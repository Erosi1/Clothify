const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const User=require('./models/user.js')
dotenv.config();

 

const app= express()
mongoose.connect(process.env.DATABASE,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log(err);
    }else {
        console.log("Connected to the database");
    }
})
//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//require apis
const productRoutes=require('./routes/product');
app.use("/api",productRoutes);


app.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log("Listening on port",4000);
    }
})
