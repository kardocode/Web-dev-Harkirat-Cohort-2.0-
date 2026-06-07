const jwt = require("jsonwebtoken");

function autMiddleware(req,res,next){
    const token = req.headers.token;
    if(!token){
        return res.status(403).json({message:"You are not logged in"});
    }
    const decode = jwt.verify(token,"random123");
    const userid = decode.USER_ID;
    if(!userid){
        return res.status(403).json({message:"malformed token"});
    }
    req.userid = userid;
    next();
}

module.exports = {
    autMiddleware: autMiddleware
}