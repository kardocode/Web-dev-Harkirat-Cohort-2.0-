const fs = require("fs");

function cleanFile(filename){
    return new Promise((res,rej)=>{
        fs.readFile(filename,"utf-8",(err,content)=>{
        if(err){
            rej();
        }else{
            const trimmedContent = content.trim();
            fs.writeFile(filename,trimmedContent,(err)=>{
                if(err){
                    rej()
                }else{
                    res();
                }
            })    
            }
        });
    })
}
async function cleanManyFiles(prefix){
    await cleanFile(prefix+"1"+".txt")
    await cleanFile(prefix+"2"+".txt")
    await cleanFile(prefix+"3"+".txt")
}

cleanManyFiles("a")
    .then(()=>{
        console.log("all 3 file have been cleaned")
    })
    .catch((err)=>{
        console.log("Error while cleaning",err)
    });