const jwt = require("jsonwebtoken");
require('dotenv').config();

function autMiddleware(req,res,next){
    const token = req.headers.token;
    if(!token){
        return res.status(403).json({message:"You are not logged in"});
    }
    const decode = jwt.verify(token,process.env.JWT_SECRET);
    const userid = decode.userId;
    if(!userid){
        return res.status(403).json({message:"malformed token"});
    }else{
        req.userid = userid;
        next();
    }
}
module.exports = {
    autMiddleware: autMiddleware,
}