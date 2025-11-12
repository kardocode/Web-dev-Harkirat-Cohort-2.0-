// Hospital Managment using Middlewares and zod library :

const express = require("express");
const zod = require("zod"); 
const port = 3003;
const app =express();

let numberofRequests = 0;
function calculateRequests(req,res,next){
    numberofRequests++;
    console.log(numberofRequests);
    next();
}
app.use(express.json());

app.get("/",(req,res)=>{
    res.send(
        `Available Routes:
        GET    → Check kidneys: /health-checkup 
        POST   → Add a kidney: /addKidney
        PUT    → Replace a kidney: /    replaceUnhealthyKidney
        DELETE → Remove a kidney: /
    `);
});
const userschema = zod.object({
    username : zod.string().min(3,"Username must be atleast 3 characters long"),
    password : zod.string().min(5,"Password must be atleast 5 characters long"),
    kidneyId : zod.array(zod.number()).nonempty("Kidney ID cannot be empty")
})



function usermiddleware(req,res,next){
    try{
        const username = req.headers.username;
        const password = req.headers.password;
        const kidneyId = Array.isArray(req.body.kidneyId)
        ? req.body.kidneyId.map(Number) : [Number(req.body.kidneyId)];

        userschema.parse({username,password,kidneyId})

        if(username !== "shiva" || password !== "password"){
            return res.status(403).json({msg: "User not exist"})
        }
        if(!kidneyId.every(id=> id === 1 || id === 2)){
            return res.status(400).json({msg:"Something went wrong with input"})
        }
        next();
    }catch(err){
        if(err instanceof zod.ZodError){
            return res.status(400).json({msg:"Validation error",errors:err.errors});
        }
        return res.status(500).json({msg: " Server error"});
    }
}

app.get("/health-checkup",usermiddleware,(req,res)=>{
    res.send("Your hearth is healthy")
});

app.get("/kidney-checkup",usermiddleware,(req,res)=>{
    res.send("Your kidney is healthy")
});

app.get("/health-checkup",usermiddleware,(req,res)=>{
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
