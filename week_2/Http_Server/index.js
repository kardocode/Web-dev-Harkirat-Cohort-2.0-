const fs = require('fs');
const express = require('express');
const port = 3002;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
fs.readFile("a.txt","utf-8",(err,data)=>{
    
})

app.get('/route-hander',function(req,res){
    res.send('Hello World');
    res.json({
        name:"shiva",
        age:21
    });
})

app.get('/backend-api/conversation',(req,res)=>{
    const data = req.body.message
    console.log(data);
    res.json({
        output:"2 + 2 = 4"
    });
})

app.post('/',function(req,res){
    res.send('POST request to the homepage');
});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
});