const express = require("express");
const app = express();
const port = 3003;


var user = [{
    name : "shiva",
    kidneys:[{
        healthy: false
    }],
    metadata :{
        profilepicture : "",
        pronouns : "he/she/they",
        address : {
            street:"",
            city:"",
            zip:""
        }
    }
}]

app.get("/", (req, res) => {
  res.send(`
Available Routes:

GET    → Check kidneys: /checkKidney 
POST   → Add a kidney: /addKidney
PUT    → Replace a kidney: /replaceUnhealthyKidney
DELETE → Remove a kidney: /
  `);
});

app.get("/checkKidney",(req,res)=>{
    const shivaKidney = user[0].kidneys;
    const totalKidney = user[0].kidneys.length;

    let numberofHealthyKidney = 0;
    for(let i=0;i<shivaKidney.length;i++){
        if(shivaKidney[i].healthy){
            numberofHealthyKidney++;
        }
    }
    const numberofUnhealthyKidney = shivaKidney.length - numberofHealthyKidney;

    res.json({
        totalKidney,
        numberofHealthyKidney,
        numberofUnhealthyKidney
    })
})

app.use(express.json());

app.post("/addKidney",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/",(req,res)=>{
    let totalKidney = user[0].kidneys.length;
    for(let i=0;i<totalKidney;i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/",(req,res)=>{
    const newKidneys = [];
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    user[0].kidneys = newKidneys;
    res.json({msg:"DONE"})
})



app.listen(port,()=>{
    console.log(`You are in port: ${port}`);
})