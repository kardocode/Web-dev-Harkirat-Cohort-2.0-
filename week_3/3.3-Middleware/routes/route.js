const express = require("express");
const router = express.Router();
// middlewares

const auth = function(req,res,next){
    console.log("Inside auth Middleware");
    req.user = {userId:1,role:"student"};

    if(req.user){
        return next();
    }else{
        return res.json({
            success: false,
            message:"Not a valid user"
        });
    }
}

const isStudent = function(req,res,next){
    console.log("I am inside Student middleware");
    if(req.user.role === "student"){
        return next();
    }else{
        return res.json({
            success:false,
            msg:"Access Deneied this route is only for student"
        })
    }
}

const isAdmin = function(req,res,next){
    console.log("Inside Admin Middleware");
    if(req.user.role === "admin"){
        return next();
    }else{
        return res.json({
            success:false,
            msg:"Access denied this route is only for admin"
        })
    }
}

router.get("/student",auth,isStudent,(req,res)=>{
    console.log("I am inside student rote");
    res.send("Student specific page")
})
router.get("/admin",auth,isAdmin,(req,res)=>{
    console.log("I am inside admin rote");
    res.send("Admin specific page")
})

module.exports = router;