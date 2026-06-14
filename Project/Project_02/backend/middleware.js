const jwt = require('jsonwebtoken');
require('dotenv').config();
function authmiddleware(req,res,next){
    const token = req.headers.token;
    if(!token){
        res.status(403).json({message:"Not signed in"})
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET);
    const userId = decode.userId;
    if(userId){
        req.userId = userId;
        next();
    }else{
        return res.status(402).json({message:"malformed token"});
    }
}

module.exports = {
    authmiddleware : authmiddleware
}