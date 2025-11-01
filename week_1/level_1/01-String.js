// -- String Manipulation :

function getLength(str,target,start,end){
    console.log("Original String:",str);
    console.log("Length of String:",str.length);
    console.log("Target:",str.indexOf(target));
    console.log("Target from Last:",str.lastIndexOf(target));
    console.log("After Slicing:",str.slice(start,end));
    

}

var user = "Hello World World World";
getLength(user,"W",0,5)

const value = "ShivaTHeHero";

let ans1 = value.slice(2,5) // iva
let ans2 = value.substr(2,5) // ivaTH

console.log(ans1);
console.log(ans2);

console.log("SLICING FUNCTION");


function cutOut(str,start,end){
    let newStr = "";
    for(let i =start; i<end;i++){
        newStr += str[i];
    }
    return newStr;
}

console.log(cutOut("HELAOWORLD",2,5));
console.log("HELAOWORLD".slice(2,5));

// Replace String: 

const a = "HELLO WORLD";
console.log(a.replace("WORLD","SHIVA"))

// split

const value1 = "hi my name is, shiva"
const word = value1.split(",");

console.log(word);

// trim

const value2 = "   shiva is my name  ";
console.log(value2.trim())

// toUpperCase and toLowerCase;
const value3 = "   SHIVA is my name  ";
console.log(value3.trim().toUpperCase());
