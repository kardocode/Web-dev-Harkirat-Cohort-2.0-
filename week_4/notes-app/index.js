const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser")
const port = 3000;
app.use(bodyParser.json());

let notes = [];
const users = [
    {username : "gauransh",password: "1233"},{username:"shiva",password:"1244"}
];

app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const userExists = users.find(user => user.username === username);
    if(userExists){
        res.status(200).json({
            message : "User with this username already exists"
        })
    }else{
        users.push({username,password})
    }
    res.json({
        message:"You have signed up"
    })
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    const userExist = users.find(user => user.username === username && user.password === password);

    if(!userExist){
        res.status(404).json({message:"Incorrect Credential"})
    }else{
        const token = jwt.sign({
            username : username
        },"gauransh123");

        res.json({
            token: token
        })
    }
});

//POST - create a note   -- Authenticated Endpoint
app.post('/notes',(req,res)=>{
    // check if they have sent the right headers. extract who user is from the header.
    const token = req.headers.token;
    if(!token){
        res.status(403).send({message:"You are not logged in"});
        return;
    }
    const decode = jwt.verify(token,"gauransh123");
    const username = decode.username;
    if(!username){
        return res.status(403).json({
            message:"malformed token"
        })
    }

    const note = req.body.notes;
    notes.push({note, username});
    res.json({"message":"DONE!!"});
})

//GET - get all my notes
app.get('/notes',(req,res)=>{
    const token = req.headers.token;
    if(!token){
        res.status(403).send({message:"You are not logged in"});
        return;
    }
    const decoded = jwt.verify(token,"gauransh123");
    const username = decoded.username;
    if(!username){
        return res.status(404).json({
            message : "malformed token"
        })
    }
    const userNotes = notes.filter(note=>note.username === username);

    res.json({
        userNotes
    })
})

app.get("/",(req,res)=>{
    res.sendFile("D:/webdev/week_4/notes-app/index.html")
})

app.listen(port,()=>{
    console.log(`${port} -> PORT`)
});
