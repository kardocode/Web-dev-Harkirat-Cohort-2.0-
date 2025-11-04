// Hospital Managment using Middlewares and zod library :

const express = require("express");
const port = 3001;
const app =express();
app.use(express.json());

let numberofRequests = 0;
function calculateRequests(req,res,next){
    numberofRequests++;
    console.log(numberofRequests);
    next();
}


app.get("/",(req,res)=>{
    res.send(
        `Available Routes:
        GET    → Check kidneys: /health-checkup 
        POST   → Add a kidney: /addKidney
        PUT    → Replace a kidney: /    replaceUnhealthyKidney
        DELETE → Remove a kidney: /
    `);
});

    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

function usermiddleware(req,res,next){
    if (username !== "shiva" || password !== "pass"){
            return res.status(403).json({
                msg: "User not exist"
            })
    }else{
        next();
    }
}

function kidneymiddleware(req,res,next){
    if(kidneyId !=1 && kidneyId !=2){
        return res.status(400).json({msg:"Something went wrong with input"})
    }else{
        next();
    }
}

app.get("/health-checkup",usermiddleware,kidneymiddleware,(req,res)=>{
    res.send("Your hearth is healthy")
});

app.get("/kidney-checkup",usermiddleware,kidneymiddleware,(req,res)=>{
    res.send("Your kidney is healthy")
});

app.get("/health-checkup",usermiddleware,kidneymiddleware,(req,res)=>{
    res.send("Your  is healthy")
});



app.post("/",(req,res)=>{
    console.log(req.body);
    req.headers;
    req.query;

});

app.put("/",(req,res)=>{
    
});

app.delete("/",(req,res)=>{
    
});

app.listen(port,()=>{
    console.log(`The port is: ${port}`);
})

