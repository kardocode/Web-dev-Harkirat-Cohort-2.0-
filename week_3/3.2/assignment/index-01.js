const express = require("express");
const app = express();
app.use(express.json());
const port = 3001;
const {z} = require("zod");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const mongoose = require("mongoose");


const All_Users = [
    {username:"shiva@gmail.com",password:"11221122", name:"shiva"},
    {username:"gauransh@gmail.com",password:"22112211",name:"gauransh"}
]

const input = z.object({
    username: z.string().min(5,"Minimum 5 characther"),
    password: z.string().min(5,"Minimum 5 characther")
});


function validateInput(req,res,next){
    
   const parseinput= input.safeParse(req.body);
    next();
    if(!parseinput.success){
        return res.status(400).json({msg:"Invalid inputz",errors:parseinput.error.format() });
    }
    req.parsedBody = parseinput.data;
    next();

}

function ifUserExist(){
    return All_Users.find((u)=> u.username === username && u.password === password) || null;
}


app.post("/signin",validateInput,(req,res)=>{
    const {username , password} = req.body;
    
    if(!ifUserExist(username,password)){
        return res.status(403).json({
            msg: "User does not exists in out memory db",
        });
    }

    var token = jwt.sign({ username: username}, "shhhh");
    return res.json({
        token,
    });
})


app.get('/users',(req,res)=>{
    const token = req.headers.authorization;
    try{
        const decode = jwt.verify(token , jwtPassword);
        const username  = decoded.username;

    }catch(err){
        return res.status(403).json({
            msg : "Invalid token",
        });
    }
});

app.listen(port,()=>{
    console.log(`This is the port : ${port}`);
})


// Pihfp2Q0DLtUYsgw