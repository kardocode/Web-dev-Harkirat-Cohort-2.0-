// username,password 
// organization
//board
// issues

const express = require("express");
const app = express();
const port = 3000;
const jwt = require("jsonwebtoken");
app.use(express.json());

const user = [{
    id:1,
    username:"harkirat", // uniqueness constraint
    password:123123
},
{
    id:2,
    username:"gauransh",
    password : "123321"
    }];
const organizations = [{
    title:"100xdevs",
    description:"Learning coding platform",
    admin:1,
    members : [2]
}];
const boards = [{
    id: 1,
    title:"100xschool website (frontend)",
    organization : 1
}];
const issues = [{
    id : 1,
    title : "Add dark mode",
    boardId : 1
},{
    id: 2,
    title : "Allow admins to create more courses",
    boardId: 1
}];
const JSON_Secret = "random123";


app.post('/signup',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    const userExist = user.find(user=>user.username === uesrname);
    if(userExist){
        return res.status(203).json({message:"Username already exist"})   
    }else{
        user.push({username,password});
    }
})

app.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const userExist = user.find(user=>user.username === username && user.password == password);
    if(!userExist){
        return res.status(403).send("You are logged in");
    }
    else{
        const token = jwt.verify({username,password},JWT_Secret);
    }
})

app.post('/onboard',(req,res)=>{

})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","frontend","index.html"));
})

app.listen(port,()=>{
    console.log(port)
})