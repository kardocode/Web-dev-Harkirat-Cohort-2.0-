const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const express = require('express');
const jwt = require('jsonwebtoken');
const { authmiddleware } = require('./middleware');
const { todoModel, userModel } = require('./models');
// Change DNS
require('dotenv').config();
const path = require('path');
const app = express();

app.use(express.json());

// let USER = [];
// let TODOS = [];
// let userId = 1;
// let todosId = 1;

app.post('/signup',async (req,res)=>{
    const {username,password} = req.body;
   
    // const userExist = USER.find(u => u.username === username);
    const userExist = await userModel.findOne({
        username: username,
        password: password
    })
    if(userExist){
        return res.status(402).json({message:"User already exist Go for Sign-In "});
    }
    const newUser = await userModel.create({
        username: username,
        password: password
    })
    res.status(200).json({message:"User signed up successfully",id:newUser._id});
})
app.post('/signin',async (req,res)=>{
    const {username , password} = req.body;
    const userExist = await userModel.findOne({username , password});
    if(!userExist){
        return res.status(404).json({message:"User not exist"});
    }else{
        const token = jwt.sign({userId:userExist._id},process.env.JWT_SECRET);
        return res.json({token})
    }
})
app.post('/todo',authmiddleware, async (req,res)=>{
    const userId = req.userId;
    const { title , description } = req.body;
    const newTodo = await todoModel.create({
        title,description,
        userId 
    })
    res.status(200).json({
        message: "Todo made"
    })
})

app.delete("/todo/",authmiddleware, async (req,res)=>{
    const userId = req.userId;    
    const todoExist = todoModel.findOne({userId});
    if(!todoExist){
        return res.status(402).json({
            message:"UserId or the todoId mismatch"
        })
    }else{
            await todoModel.deleteOne({userId});
            return res.json({
                message: "DELETED"
            })
    }
})

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","frontend","signup.html"))
});
app.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","frontend","signin.html"))
});

app.get('/todos',authmiddleware,async (req,res)=>{
    const userId = req.userId;
    const todoExist = todoModel.findOne({userId});
    if(!todoExist){
        return res.status(402).json({
            message:"UserId or the todoId mismatch"
        })
    }else{
        const userTodo = await todoModel.findOne({userId});
        res.json({
            todos: userTodo
        })
    }
})

app.listen(3001);