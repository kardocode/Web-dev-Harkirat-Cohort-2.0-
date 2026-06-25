import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import { UserModel,TodoModel } from "./models";

const app = express();

interface SignupInput {
    username: String,
    password: String
}

app.post('/signup',(req,res)=>{
    const body: SignupInput = req.body;
    //push to db 
    
    res.json({
        message:"SignUp Done!"
    })
})


app.listen(3000);
