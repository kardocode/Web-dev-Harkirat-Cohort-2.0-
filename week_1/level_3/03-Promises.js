// Promises are syntactical sugar that makes a code slightly more readable


const fs = require('fs');

function shivaReadFile(cb){
    fs.readFile("a.txt","utf-8", function(err,data){
        cb(data)
    });
}

// callbak function to call
function onDone(data){
    console.log(data);
}

shivaReadFile(onDone);

// using Promises below :

function kiratReadFile(){  
    return new Promise(function(resolve){
        fs.readFile("a.txt" , "utf-8", function(err,data){
            resolve(data);
        });
    })
}

kiratReadFile().then(onDone)


function shivaAsyncReadFile(){
    return new Promise(function(resolve){
        resolve("hi there");
    });
}

// function main(){
//     shivaAsyncReadFile().then(function(value){
//         console.log(value);
//     })    
// }


async function main(){
    const value = await shivaAsyncReadFile();
    console.log(value);
    
}

main();