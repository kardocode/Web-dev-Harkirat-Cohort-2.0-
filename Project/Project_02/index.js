
const express = require('express');
const jwt = require("jsonwebtoken");
const { authmiddleware } = require('./middleware');
const path = require('path');
const app = express();
app.use(express.json());

let USER = [];
let TODOS = [];
let userId = 1;
let todosId = 1;

app.post('/signup',(req,res)=>{
    const {username,password} = req.body;
    const userExist = USER.find(u => u.username === username);
    if(userExist){
        return res.status(402).json({message:"User already exist Go for Sign-In "});
    }
    USER.push({id:userId,username,password});
    const tempId = userId;
    userId++;
    res.status(200).json({message:"User signed up successfully",id:tempId});
})
app.post('/signin',(req,res)=>{
    const {username , password} = req.body;
    const userExist = USER.find(u => u.username === username && u.password === password);
    if(!userExist){
        return res.status(404).json({message:"User not exist"});
    }else{
        const token = jwt.sign({userId:userExist.id},"random123");
        return res.json({token:token})
    }
})
app.post('/todo',authmiddleware,(req,res)=>{
    const userId = req.userId;
    const { title , description } = req.body;
    TODOS.push({
        id: todosId++,
        title,description,
        userId : userId
    })
    res.status(200).json({
        message: "Todo made"
    })
})

app.delete("/todo/:todoId",authmiddleware,(req,res)=>{
    const userId = req.userId;
    const todoId = parseInt(req.params.todoId);
    
    const todoExist = TODOS.find(t => t.id === todoId && t.userId === userId);
    if(!todoExist){
        return res.status(402).json({
            message:"UserId or the todoId mismatch"
        })
    }else{
        TODOS = TODOS.filter(t => t.userId === userId && t.id === todoId);
        return res.json({
            message: "DELETED"
        })
    }
})
app.get('/todos',authmiddleware,(req,res)=>{
    const userId = req.userId;
    const todoExist = TODOS.find(t => t.userId === userId);
    if(!todoExist){
        return res.status(402).json({
            message:"UserId or the todoId mismatch"
        })
    }else{
        const userTodo = TODOS.find(t => t.userId === userId);
        res.json({
            todos: userTodo
        })
    }
})

app.listen(3000);