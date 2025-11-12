const express = require("express");
// const app = express();


// function middlewares(){
//     return (req,res,next){

//     }
// }

// app.use(express.json());

// app.post("/",(req,res)=>{

// })

const z = require("zod");

const user = z.string().min(4," MIN 4 char");

function validusername(name){
        const result = user.safeParse(name);
        if(result.success){
            return {valid:true,name:result.data};
        }
    else{
    
        return{ vslid:false,
        errors: result.error.errors,}        
    }
}

console.log(validusername("mid"));