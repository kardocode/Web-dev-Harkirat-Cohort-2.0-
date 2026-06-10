const jwt = require('jsonwebtoken')
function authmiddleware(req,res,next){
    const token = req.headers.token;
    if(!token){
        res.status(403).json({message:"Not signed in"})
    }

    const decode = jwt.verify(token,"random123");
    const userId = parseInt(decode.userId);
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