// setTimeout
console.log("100");
function findSum(n){
    let ans = 0;
    for(let i =0;i<n;i++){
        ans += i
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100, 1000)
console.log("hello world");


// you cannot use promise when there are multiple resolve 
// because promise automartically do resolve for one time even you write for more times
let p = new Promise((resolve)=>{
    resolve("1");
    resolve("2");
    resolve("3");
})

p.then((data)=>{
    console.log("promise resolved")
    console.log(data)
});