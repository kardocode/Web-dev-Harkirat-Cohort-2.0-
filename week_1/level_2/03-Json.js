const user = '{"name": "shiab","age": 12,"gender":"male"}';

// you can not do this cause it is a string now
// console.log(user["name"]);


// JSON.parse
// JSON.stringify : makes a String 

const users = JSON.parse(user)

console.log(users["gender"]);


const newuser = {name:"shiva",age:21,male:"gender"};
const finalString = JSON.stringify(newuser);
console.log(finalString);

// you can not do this
// console.log(finalString["name"]); cause final string is a string itself.
