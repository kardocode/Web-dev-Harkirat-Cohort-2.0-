const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser")
const { authmiddleware } = require('./middleware');
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
app.post('/notes',authmiddleware,(req,res)=>{

    const username = req.username;
    const note = req.body.note;
    notes.push({note, username});
    res.json({"message":"DONE!!"});
})

//GET - get all my notes
app.get('/notes',authmiddleware,(req,res)=>{
    const username = req.username;
    const userNotes = notes.filter(note=>note.username === username);

    res.json({
        userNotes
    })
})

// app.get("/",(req,res)=>{
//     res.sendFile("D:/webdev/week_4/notes-app/index.html")
// })

// app.get("/signup",(req,res)=>{
//     res.sendFile("D:/webdev/week_4/notes-app/signup.html")
// })
// app.get("/signin",(req,res)=>{
//     res.sendFile("D:/webdev/week_4/notes-app/signin.html")
// })

app.listen(port,()=>{
    console.log(`${port} -> PORT`)
});
