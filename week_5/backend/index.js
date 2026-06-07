// username,password 
// organization
//board
// issues

const express = require("express");
const app = express();
const port = 3000;
const jwt = require("jsonwebtoken");
const { autMiddleware } = require('./middleware');
const path = require('path');

app.use(express.json());

let USER_ID = 1;
let BOARD_ID = 1;
let ORGANISATION_ID = 1;
let ISSUES_ID = 1;

let USER = [];
let ORGANISATION = [{
    title:"100xdevs",
    description:"Learning coding platform",
    admin:1,
    members : [2]
}];
let BOARDS = [{
    id: 1,
    title:"100xschool website (frontend)",
    organization : 1
}];
let ISSUES = [{
    id : 1,
    title : "Add dark mode",
    boardId : 1,
    state: "IN-Progress"    //Next up | In-progress | DONE
}];

const JWT_Secret = "random123";


app.post('/signup',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    const userExist = USER.find(user=>user.username === username);
    if(userExist){
        return res.status(203).json({message:"Username already exist"})   
    }else{
        USER.push({username,password,id:USER_ID++});
        res.json({message:"You have signed in successfully"})
    }
})

app.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const userExist = USER.find(user=>user.username === username && user.password == password);
    if(!userExist){
        return res.status(403).json({message:"Incoorrect Credentials"});
    }
    else{
        //  create jwt token
        const token = jwt.sign({userId: userExist.id},JWT_Secret);
        res.json({token:token});
    }
})

//AUTHENTICATED ROUTE - middleware
app.post('/organization',autMiddleware,(req,res)=>{
    const userId = req.userid;
    const org_id = ORGANISATION_ID++;
    ORGANISATION.push({
        id:org_id,
        title:req.body.title,
        description:req.body.description,
        admin:userId,
        members : []
    });
    res.json({
        message:"Org created",
        id:org_id
    })
})

app.post('/add-member-to-organization',autMiddleware,(req,res)=>{
    const userId = req.userid;
    const organisationId = req.body.organisationId;
    const memberUsername = req.body.memberUsername;
    
    const organisationIdExist = ORGANISATION.find(org => org.id === organisationId);
     
    if(!organisationIdExist || organisation.admin !== userId){
        return res.status(411).json({message:"Either this org does not exist or you are not the admin of this org"});
    }

    const memberUser = USER.find(u => u.username == memberUsername)

    if(!memberUser){
        return res.status(412).json({member:"No user with this name exist in our db"})
    }

    organisation.members.push(memberUser.id);

    res.json({
        message:"New member added!"
    })

})

app.post('/board',(req,res)=>{

})

app.post('/issue',(req,res)=>{

})

app.post('/boards',(req,res)=>{

})

app.post('/issues',(req,res)=>{

})

app.get('/members',(req , res)=>{

})

app.put('/issues',(req,res)=>{

})

app.delete('/members',autMiddleware,(req,res)=>{
const userId = req.userid;
    const organisationId = req.body.organisationId;
    const memberUsername = req.body.memberUsername;
    
    const organisationIdExist = ORGANISATION.find(org => org.id === organisationId);
     
    if(!organisationIdExist || organisation.admin !== userId){
        return res.status(411).json({message:"Either this org does not exist or you are not the admin of this org"});
    }

    const memberUser = USER.find(u => u.username == memberUsername)

    if(!memberUser){
        return res.status(412).json({member:"No user with this name exist in our db"})
    }

    organisation.members = organisation.members.filter(user => user.username !== memberUser);

    res.json({
        message:"New member added!"
    })

})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','frontend','index.html'));
})

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,"..",'frontend','signup.html'))
})

app.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,"..",'frontend','signin.html'))
})

app.listen(port,()=>{
    console.log(port)
})