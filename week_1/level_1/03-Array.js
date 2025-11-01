// most important callback function , map , filter , find , sort after 40 line:

// Push and pop Operator: 

const initialArray = [1,2,3];
initialArray.push(2) // [ 1, 2, 3, 2 ]
console.log(initialArray);

// pop delete from the end and for front pop we use shift() :

initialArray.pop(); // [ 1, 2, 3 ]
console.log(initialArray);

// shift()

// initialArray = [ 1, 2, 3 ]

initialArray.shift(); // [ 2, 3 ]
console.log(initialArray);

// unshift to delete and put something in front of the array :

initialArray.unshift(0); // [ 0, 2, 3 ]
console.log(initialArray);

const initArray = [1,2,3]
const secondArray = [4,5,6]

// concat()
const finalArray = initArray.concat(secondArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(finalArray);

// other way is manual by for loop 

function merge(arr1,arr2){
    for(let i=0;i<arr2.length;i++){
        arr1.push(arr2[i])
    }
    return arr1;
}
console.log(merge(initArray,secondArray)); // [ 1, 2, 3, 4, 5, 6 ]


// callback 

// for(let i =0;i<initArray.length;i++){
//     console.log(initArray[i]);
// }

function logThing(str){
    console.log(str);
}
// forEach();

// initArray.forEach(logThing); // 1 2 3 4 5 6

function log1(){
    console.log("hello 1");
}
function log2(){
    console.log("hello 2");
}

function logWhatspresent(fn){
    fn();
}

logWhatspresent(log2)


// map , filter , find , sort

