const { error } = require("console");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const {z} = require("zod");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const input =()=>{
    username = z.string().min(5,"Minimum 5 character");
    password = z.string().min(5,"Minimum 5 character");
}

const All_Users = [
    {username:"shiva@gmail.com",password:"11221122", name:"shiva"},
    {username:"gauransh@gmail.com",password:"22112211",name:"gauransh"}
]



function validateInput(req,res,next){
    try{
        input.parse(username,password);
        next();
    }catch(err){
        if(err instanceof z.ZodError){
            return res.status(402).json({msg:"Invalid inputs Check Again",err: err.error})
        }
        else{
            return res.status(512).json({msg:"Something went wrong with the server"})
        }
    }
}


app.post("/signin",(req,res,next)=>{
    const username


})

app.listen(port,()=>{
    console.log(`This is the port : ${port}`);
})
