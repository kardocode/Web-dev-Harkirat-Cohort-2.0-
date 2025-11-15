const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const port = 3003;

const todoitem=[
    {id:1,title:"reading my notes",Completed:false,description:"I will do it at the end"},
    {id:2,title:"Doing the assignment first",Completed:false,description:"Doing it right now"}
]

app.get("/todos",function(req,res){
    res.status(200).json(todoitem);   
})

app.get("/todos/:id",(req,res)=>{
    const find = Number(req.params.id);
    const todo = todoitem.find(t => t.id === find);
    if(todo === -1){
        return res.status(404).json({msg:"Todo not found"});
    }
    return res.status(200).json(todo);
});

app.use(express.json());

app.post('/todos',(req,res)=>{
    const {body} = req;
    const newUser = {id:todoitem[todoitem.length-1].id+1, ...body};
    todoitem.push(newUser);
    return res.status(201).send(newUser);
});

app.put('/todos/:id',(req,res)=>{
    const id = Number(req.params.id);
    const index = todoitem.findIndex(t => t.id === id);
    if(index === -1){
        return res.status(404).send("Not found");
    }else{
        todoitem[index] = {...todoitem[index], ...req.body}; 
        return res.status(200).send("OK");
    }
})

app.delete('/todos/:id',(req,res)=>{
    const index = Number(req.params.id);
    const find = todoitem.findIndex(t => t.id === index);
    if(find === -1){
        return res.status(404).send("Not found");
    }else{
        todoitem[find] = todoitem[find].delete;
        return res.status(200).send("OK");
    }
})

app.listen(port,()=>{
    console.log(`${port} : This is your port`);
})