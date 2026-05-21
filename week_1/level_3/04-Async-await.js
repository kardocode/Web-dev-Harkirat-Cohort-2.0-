const fs = require("fs");

function fsreadFilePromise(filename,encoding){
    return new Promise((res,rej)=>{
        fs.readFile(filename,encoding,(err,data)=>{
            if(err){
                rej(err);
            }else{
                res(data);
            }
        })
    })
}


function main1(){
    fsreadFilePromise("a.txt","utf-8")
        .then(function(data){
            console.log(data)
        
        fsreadFilePromise("b.txt","utf-8")
            .then((data)=>{
                console.log(data);
        
            fsreadFilePromise("a.txt","utf-8")
                .then(function(data){
                    console.log(data)
            })
        })
    })    
}

// main1();

// using async and await for more readible to the above code
// more syntatical sugar

async function main2(){
    let content1 = await fsreadFilePromise("a.txt","utf-8");
    let content2 = await fsreadFilePromise("b.txt","utf-8");
    let content3 = await fsreadFilePromise("a.txt","utf-8");

    console.log(content1);
    console.log(content2);
    console.log(content3);

}

main2();