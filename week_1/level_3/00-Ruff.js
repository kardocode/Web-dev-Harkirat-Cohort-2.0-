const fs = require("fs");

// fs.readFile("a.txt","utf-8" ,function(err,data){
//     if(err){
//         console.log("Error while reading file",err);
//     }else{
//         console.log(data);
//     }

// })


// const p = new Promise(function(resolve,reject){
//     fs.readFile("a.txt","utf-8" ,function(err,data){
//         if(err){
//             reject(err);
//         }
//         else{
//             console.log("wait for 3 sec");
            
//             setTimeout(()=>{
//                 resolve(data);
//             },3000);
//         }
//     })
// })

// create a promisified version of fs.readFile
function fsReadFilePromise(fileName,encoding){
    return new Promise((res,rej)=>{
        fs.readFile(fileName,encoding,(err,data)=>{
            if(err){
                rej(`Error check it out ${err}`)
            }else{
                res(data);
            }
        })
    });
}


fsReadFilePromise("a.txt","utf-8")
    .then(function(data){
        console.log(data);
    })
    .catch(function(e){
        console.log("Error while reading file");
        console.log(e);
        
    })

// create a promisified version of setTimeout
function setTimeoutPromise(delay){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("hello")
        },delay)
    })
}

setTimeoutPromise(2000)
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err)
    })
// create a promisified version of fs.writeFile
function fswriteFilePromise(filename,data){
    return new Promise((res,rej)=>{
        fs.writeFile(filename,data,(err,write)=>{
            if(err){
                rej(err);
            }else{
                res(data);
            }
        })
    })
}
const a = "My name is Ansh";
fswriteFilePromise("b.txt",a)
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log("Error let mw check it out");
        setTimeout(()=>{
            console.log(err)
        },2000)
    })
