// map , filter , arrow fns

const { log } = require("console");


// Problem : given an array , give me back a new array in which every value is multiplies by 2

// [1,2,3,4,5] = >[ 2, 4, 6, 8, 10 ]

const input = [1,2,3,4,5];

// function multipliedbyTwo(arr){
//     const newArr=[];
    
//     for(let i=0;i<input.length;i++){
//         newArr.push(input[i]*2);
//     }
//     return newArr;
// }


// console.log(multipliedbyTwo(input));

// Problem :  

function transform(i){
    return i*2;
}

const ans = input.map(transform);

console.log(ans);


// filtering 
// problem: what if i tell , given an input array , give me back all the even values from it.

const arr = [1,2,3,4,5]

// [2,4]

const newarr =[];

for(let i= 0;i<arr.length;i++){
    if(arr[i]%2 ==0){
        newarr.push(arr[i]);
    }
}
console.log(newarr);
