//http server that supports 4 routes (/sum, /sub, /div, /mul)

const express = require("express");
const app = express();
const port = 2001;
app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile("D:/webdev/week_2/Http_Server/calculatorHttpServer/index.html");
})

//http://localhost:3000/sum?a=1&b=8
app.post('/sum',(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const sum = a+b;
    res.json({
        ans:sum
    })
})
app.post('/minus',(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const minus = a-b;
    res.json({
        ans:minus
    })
})
app.post('/mul',(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const mul = a*b;
    res.json({
        ans:mul
    })
})
app.post('/div',(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const div = a/b;
    res.json({
        ans:div
    })
})

app.listen(port,()=>{
    console.log(`${port} -> PORT`);
});
