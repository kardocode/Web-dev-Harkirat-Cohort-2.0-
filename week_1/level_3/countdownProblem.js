// write a Countdown class that :
// takes a number n
// Uses setTimeout and Promises
// count down from n to 0 
// Then logs "Blast off"


function Countdown(n){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Blast off");
        },n*1000)
    });
}

async function main(data){
    const value = await Countdown(data);
    console.log(value);
}

main(2);