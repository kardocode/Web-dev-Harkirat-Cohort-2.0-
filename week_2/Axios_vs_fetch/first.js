const express = require("express");
const app = express();
const port = 3000;

let todos =[
    {
        id : 1,
        title:"Learn Express",
        description : "Build a todo server",
        completed : false
    }
];


app.get('/todos',(req,res)=>{
    res.json({
        todos : todos
    })
})


app.listen(port,()=>{
    console.log(`${port} -> PORT `)
})