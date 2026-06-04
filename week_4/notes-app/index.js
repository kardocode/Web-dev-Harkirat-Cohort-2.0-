const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

let notes = [];
const users = [
    {username : "gauransh",password: "1233"},{username:"shiva",password:"1244"}
];

app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    constuserExists = users.find(user => user.username === username);
    if(userExists){
        res.status(200).send("OK").json({
            message : "User with this username already exists"
        })
    }else{
        user.push({username:username,password:password})
    }
    res.json({
        message:"You have signed up"
    })
})

app.post("/signin",(req,res)=>{
    const username = req.body.uername;
    const password = req.body.password;
    
    const userExist = users.find(user => user.name === username && user.password === password);
    if(!userExist){
        res.status(404).json({message:"Incorrect Credential"})
    }else{}
});

//POST - create a note   
app.post('/notes',(req,res)=>{
    const note = req.body.note;
    notes.push(note);
    res.json({"message":"DONE!!"});
})

//GET - get all my notes
app.get('/notes',(req,res)=>{
    res.json({notes})
})

app.get("/",(req,res)=>{
    res.sendFile("D:/webdev/week_4/notes-app/index.html")
})

app.listen(port,()=>{
    console.log(`${port} -> PORT`)
});
