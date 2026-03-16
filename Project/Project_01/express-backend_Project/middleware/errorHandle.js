const errorHandler = (err,req,res,next) =>{
    const statuscode = res.statuscode ? res.statuscode : 500;
    const {constant} = require("../constant");
    switch (statuscode){
        case constant.VALIDATION_ERROR:
            res.json({
                title : "Not Found",
                message:err.message,
                stackTrace : err.stack
            });
        case constant.UNAUTHORIZED:
            res.json({
                title : "Unauthorize",
                message:err.message,
                stackTrace : err.stack
            });
        case constant.FORBIDEN:
            res.json({
                title : "Forbiden",
                message:err.message,
                stackTrace : err.stack
            });
        case constant.SERVER_ERROR:
            res.json({
                title : "Server Error",
                message:err.message,
                stackTrace : err.stack
            });
        default:
            console.log("NO ERROR , All Good");
            break;
    }
    res.json({title : "Validation Failed",message:err.message,stackTrace : err.stack});
};

module.exports = errorHandler;