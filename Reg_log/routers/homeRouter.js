const express = require('express');
const homeSchema = require('../models/homeSchema');
const Router=express.Router();
const userSchema=require('../models/homeSchema')
Router.get('/',(err,res)=>{
    res.render('register.ejs',{title:'Fill Form',password:'',email:''});
})

Router.post('/register',async(req,res)=>{
    try{
        const {
            name,
            number,
            email,
            password,
            cpassword 
        }=req.body;
    if(password===cpassword){
        const userData=new homeSchema({
            name,
            number,
            email,
            password
        })
        userData.save(err=>{
            if(err){
                console.log("err")
            }
            else{
                res.render('register.ejs',{title:'Done. Proceed to login',password:'',email:''})}
            }) 
    const useremail =await homeSchema.findOne({email:email});
        if(email===useremail.email){
            res.render('register.ejs',{title:'',password:'',email:'Email already in use'})
        }else{
            console.log(err)
        }    
        }else{
        res.render('register.ejs',{title:'',password:'Password not matching',email:''})
    }
    }catch(error){
        res.render('register.ejs',{title:'Error in code',password:'',email:''})
    }
})

//Login in
Router.post('/login',(req,res)=>{
    const{
        email, 
        password
    }=req.body;

    homeSchema.findOne({email:email},(err,result)=>{
        if(email===result.email && password===result.password){
            console.log('success')
            res.render('load.ejs')
        }
        else{
            console.log("err")
        }
    })
})
module.exports=Router;
