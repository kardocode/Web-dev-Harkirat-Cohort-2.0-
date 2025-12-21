// create express app

// use middleware (express.json(), logger, etc.)

// define routes

// for each route, call functions from handleRequest.js


const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/',(req,res)=>{
    
})
app.post('/',(req,res)=>{

})

app.listen(port,()=>{
    console.log(`You are on port ${port}`);
});