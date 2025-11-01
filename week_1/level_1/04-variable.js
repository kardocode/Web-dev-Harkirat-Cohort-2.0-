let firstName = "John" ;
const age = 30;
var isStudent = true ; 

console.log(firstName);
console.log(age);
console.log(isStudent);

// let user = ["harkirat", "ramn",67]

// console.log(user[0])

function greet(name){   
    return "HELLO " + name;
}

console.log(greet("SHIVA"))

function sum(a,b){
    return a+b;
}

console.log(sum(9,0));


 // create a function that that takes an array of objects as input , and returns the users whose age > 18 and are male

function isvalid(user){
   let result = [];
   
   for(let i=0;i<user.length;i++) {
        if(user[i]['age'] < 18){
            result.push(user[i]['name'] +" Not valid");
        }
        else{
            result.push(user[i]["name"] + " IS VALID");
        }
    }
    return result;
}
const user = [ {
    name: "shiva" , 
    age: 18,
    gender: "male"
},{
    name: "priya",
    age : 13,
    gender: "female"
}]


console.log(isvalid(user));
let sum1 = 0;
for(let i =0;i<1000000000000000;i++){
    sum1 += i;
}
console.log(sum1)