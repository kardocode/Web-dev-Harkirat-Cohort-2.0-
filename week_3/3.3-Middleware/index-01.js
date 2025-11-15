// default middleware => express.json();
const express  =require("express");
const app = express();
app.use(express.json());
const port = 3004;

const route = require('./routes/route');
// mouting the route
app.use('/api',route);
// -> /api/student
// -> /api/admin

// const loggingMiddleware = function(req,res,next){
//     console.log("Logging in");
//     next();
// }
// const authMiddleware = function(req,res,next){
//     console.log("Authenticating in");
//     next();   
// }
// const validationMiddleware = function(req,res,next){
//     console.log("Validating in");
//     next();
// }
// app.use(loggingMiddleware);
// app.use(validationMiddleware);
// app.use(authMiddleware);

app.get('/',(req,res)=>{
    console.log("Main roter handler in");
    console.log(req.body);
    res.send("Hello World")
    
})


app.listen(port);