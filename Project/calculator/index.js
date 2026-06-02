const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("This is the calculator")
    res.send("For sum opertaion go to /submit");
});
app.use(express.json());

app.post('/submit',(req,res)=>{
    const a = Number(req.body.num1);
    const b = Number(req.body.num2);
    const ope = req.body.ope; 

    if(ope === "sum"){
        res.send(`This is the result of your i/p=> ${a+b}`);
    }
    else if(ope === "minus"){
        res.send(`This is the result of your i/p=> ${a-b}`);
    }else if(ope === "mul"){
        res.send(`This is the result of your i/p=> ${a*b}`)
    }
    else if(ope === "div"){
        if(b === 0){
            res.status(400).send("Cannot divide by zero")
        }else{
            res.send(`This is the result of your i/p=> ${a/b}`)
        }
    }else{
        res.send("Invalid chooice")
    }
});



app.listen(port,()=>{
    console.log(`${port} -> Port`)
});