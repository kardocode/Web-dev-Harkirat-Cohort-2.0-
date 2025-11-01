const currentDate = new Date();

console.log(currentDate.getDate()+"-"+currentDate.getMonth()+"-"+currentDate.getFullYear());
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());

console.log("TIME : " + currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds());


console.log("Time in milliseconds since 1970:",currentDate.getTime());
// epoch timestamp 

function calculateSum (){
    let a = 0;
    for(let i=0;i<1000000000;i++){
        a +=i;
    }
    return a;
}
const beforeDate = new Date() ;
const beforeTimeinMS = beforeDate.getTime();
calculateSum();

const afterDate = new Date() ; 
const afterTimeinMs = afterDate.getTime();

console.log(afterTimeinMs - beforeTimeinMS);
