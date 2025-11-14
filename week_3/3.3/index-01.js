// middlewares
/* 
1. Build a request-time logger middleware

Create a middleware that logs:

the request method (GET/POST/etc.)

the URL

the exact time taken for the route handler to finish
Use Date.now() before and after next() to measure performance
*/
const express  = require("express");
const app = express();
app.use(express.json());
function requestTimeLoggerMiddleware(req,res,next){
    const date =Date.now();
    res.on("finish",()=>{
        const end =Date.now();
        const time = start - end;

        console.log(`[${req.method}] -${time}ns`);
    })
    next();
}

app.get((req,res)=>{
    res.send("this is get");
    
})
app.post((req,res)=>{})
app.delete((req,res)=>{})
app.put((req,res)=>{})

app.listen(3000);