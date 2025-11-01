// Promiese are the things which give user a promise that they may or may not give output immediately


// function myOwnsetTimeout(data,duration){
//     setTimeout(()=>{
//         console.log(data)
//     },duration);
// }

// function sum_100(){
//     let count =0;
//     for(let i=0;i<100;i++){
//         count +=i;
//     }
//     return count;
    
// }
// myOwnsetTimeout("hi threr",3000);

// sum_100();

const fs = require('fs');
function myOwnsetTimeout(data,duration){
    return new Promise(function(resolve){
        setTimeout(()=>{    
            fs.readFile("a.txt","utf-8",function(err,data){
                resolve(data);
            });
        },duration)
    });
}

// myOwnsetTimeout("hi there",2000).then(result=>console.log(result)
// );

async function main(){
    let result = await myOwnsetTimeout("hi there",3000  );
    console.log(result);
    
}

main();