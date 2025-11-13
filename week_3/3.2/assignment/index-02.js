const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3002;

mongoose.connect("mongodb+srv://freakyassnixxa_db_user:Pihfp2Q0DLtUYsgw@cluster0.sysc3fs.mongodb.net/")

const User  = mongoose.model('Users',{name:String,email:String,password:String});

app.post('/signin',async function(req,res){
    const {username,password,name} = req.body;

    const user = new User({
        name: name,
        email : username,
        password : password
    });

    const saved = await user.save();
    console.log("Data saved:",saved);
    
});

app.listen(port,()=>{
    console.log(port);
    
})