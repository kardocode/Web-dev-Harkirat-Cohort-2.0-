// if this is an array of string with atleast 1 input , return true, else false
const {z} = require("zod");
const inputschema = z.array(z.string()).nonempty("null")
function validateInput(res,req){
    try{
        inputschema.parse(req.body.input);
        return true;
    }catch(err){
        return false;
    }
}

// {email : string,password: atleast 8 letters, country: "IN","US"}

const inputs = ()=>{
    email = z.string().email("Invalid  email format");
    password = z.string().min(8,"Atleast 8 char long")
    country = z.enum(["IN","US"],"country can be either IN or US");
}

function validUserInput(req,res,next){
    try{
        inputs.parse(req.body);

        next();
    }catch(err){
        if(err instanceof z.ZodError){
            return res.status(400).json({msg:"Something went wrong with inputs",errors:err.errors});
        }
        return res.status(500).json({msg:"Server error"})
    }
}

app.post("/login",(req,res)=>{
    const response = validUserInput();
    if(!response.success){
        res.json({
            msg:"Your inputs are invaid"
        });
        return; 
    }
})