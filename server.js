const express = require("express");
const mongoose = require("mongoose");
const app = express();
const DB = "mongodb+srv://mayank:mayank2000@cluster0.fvwathy.mongodb.net/busdata?retryWrites=true&w=majority"


mongoose.set('strictQuery', false);
mongoose.connect(DB,{useNewUrlParser : true,})
.then(()=>{
    console.log("Connection Succesful");
}).catch((err)=>{console.log("No Connection")});

//middleware
const middleware = (req,res,next)=>{
    next();
    }
    
    app.get('/',(req,res)=>{
        res.send('HelloGuys')
    })
    app.get('/about',middleware,(req,res)=>{
        res.send('Hello About Me Guys')
    })
    app.get('/contact',(req,res)=>{
        res.send("Contact Page");
    })
    app.get('/signup',(req,res)=>{
        res.send("Sign Up");
    })
    app.get('/sigin',(req,res)=>{
        res.send("Sign In");
    })
    
    
    
    app.listen(3000,()=>{
        console.log("Server running at port 3000");
    })