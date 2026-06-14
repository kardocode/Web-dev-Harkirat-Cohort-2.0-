// username,password 
// organization
//board
// issues
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const express = require("express");
const app = express();
const port = 3000;
const jwt = require("jsonwebtoken");
const { autMiddleware } = require('./middleware');
const path = require('path');
require('dotenv').config();
const { userModel,orgModel,boardModel,issueModel } = require('./models');

app.use(express.json());

// let USER_ID = 1;
// let BOARD_ID = 1;
// let ORGANISATION_ID = 1;
// let ISSUES_ID = 1;

// let USER = [];
// let ORGANISATION = [{
//     title:"100xdevs",
//     description:"Learning coding platform",
//     admin:1,
//     members : [2]
// }];
// let BOARDS = [{
//     id: 1,
//     title:"100xschool website (frontend)",
//     organization : 1
// }];
// let ISSUES = [{
//     id : 1,
//     title : "Add dark mode",
//     boardId : 1,
//     state: "IN-Progress"    //Next up | In-progress | DONE
// }];

// const JWT_Secret = "random123";


app.post('/signup', async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    const userExist = await userModel.findOne({username});
    if(userExist){
        return res.status(203).json({message:"Username already exist"})   
    }else{
        const newUser = await userModel.create({username : username,password:password});
        res.json({message:"You have signed in successfully",id:newUser._id})
    }
})

app.post('/signin',async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const userExist = await userModel.findOne({username,password});
    if(!userExist){
        return res.status(403).json({message:"Incoorrect Credentials"});
    }
    else{
        const token =await jwt.sign({userId: userExist._id},process.env.JWT_SECRET);
        res.json({token:token});
    }
})

//AUTHENTICATED ROUTE - middleware
app.post('/organisation',autMiddleware, async (req,res)=>{
    const userId = req.userid;
    const organisation = await orgModel.create({
        title:req.body.title,
        description:req.body.description,
        admin:userId,
        members : []
    });
    res.json({
        message:"Org created",
        id: organisation._id
    });
});

// Only admin can add member to Org
app.post('/:organisationId/add-member-to-organization',autMiddleware,async (req,res)=>{
    const userId  = req.userid;
    const organisationId = req.params.organisationId;
    const memberUsername = req.body.memberUsername; 
    
    const organisation = await orgModel.findOne({_id:organisationId});
     
    if(!organisation || !organisation.admin.equals(userId)){
        return res.status(411).json({message:"Either this org does not exist or you are not the admin of this org"});
    }

    const memberUser = await userModel.findOne({username :memberUsername})

    if(!memberUser){
        return res.status(412).json({member:"User with this name does not exist in our db"})
    }

    organisation.members.push(memberUser._id);

    await organisation.save();

    res.json({
        message:"New member added!"
    });

})

app.post('/board',(req,res)=>{

})

app.post('/issue',(req,res)=>{

})

//Get endpoints
app.get('/organisations/:organisationId',autMiddleware,async (req,res)=>{
    const userId = req.userid;    
    const organisationId = req.params.organisationId;

    const organisation = await orgModel.findOne({_id:organisationId})
    if(!organisation || !organisation.admin.equals(userId)){
        return res.status(413).json({message:"Either this is not a org or you are not the admin of this org"})
    }
    const membersWithDetails = await Promise.all(
        organisation.members.map(async (memberId) => {
            const user = await userModel.findOne({ _id: memberId });
            return { id: user._id, username: user.username };
        })
    );

    res.json({
        organisation: {
            ...organisation.toObject(),
            members: membersWithDetails
        }
    });

})
// app.get('/boards',(req,res)=>{

// })

// app.get('/issues',(req,res)=>{

// })

// app.get('/members',(req , res)=>{

// })

// app.put('/issues',(req,res)=>{

// })

app.delete('/members/:orgId',autMiddleware,async (req,res)=>{
    const userId = req.userid;
    const organisationId = req.params.orgId;
    const memberUsername = req.body.memberUsername;
    
    const organisationIdExist = await orgModel.findOne({_id: organisationId});
     
    if(!organisationIdExist || !organisationIdExist.admin.equals(userId)){
        return res.status(411).json({message:"Either this org does not exist or you are not the admin of this org"});
    }

    const memberUser = await userModel.findOne({username:memberUsername})

    if(!memberUser){
        return res.status(412).json({member:"No user with this name exist in our db"})
    }

    // organisation.members = organisation.members.filter(user => user.username !== memberUser);
    await orgModel.updateOne({
        _id:organisationId,   
    },{
        "$pull":{
            members: memberUser._id
        }
    })

    res.json({
        message:"New member deleted!"
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

app.get('/organisation',(req,res)=>{
    res.sendFile(path.join(__dirname,"..",'frontend','organisation.html'))
})

app.get('/add-member-to-organization',(req,res)=>{
    res.sendFile(path.join(__dirname,"..",'frontend','addMember.html'))
})

app.listen(port,()=>{
    console.log(port)
})