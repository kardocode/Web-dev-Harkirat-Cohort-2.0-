// console.log("started")
function greet(name:String):void{
    console.log("hello",name);
}

// greet("shiva");

function first_ele(arr:number[]) :null | number{
    if(arr.length > 0){
        return arr[0] ?? null;
    }else{
        return null;
    }
}

// console.log(first_ele([1,2]))
// console.log(first_ele([1]))
// console.log(first_ele([]))

function isAdult(age:number):boolean{
    return (age>=18)? true:false;
}

// console.log(isAdult(19));
// console.log(isAdult(1));
// console.log(isAdult(18));

interface User {
    firstName : string;
    lastName : string;
    email : string;
    age : number
}
function isLegal(user: User){
    if(user.age >= 18){
        return true;    
    }else{
        return false;
    }
}

let user1: User = {
    firstName : "shiva",
    lastName : "maheshwari",
    email : "shiva@gmail.com",
    age : 19
}

console.log(isLegal(user1));

function filterUser(user : User[]){
    return user.filter(x => x.age >= 18);
}

console.log(filterUser([
    {
        firstName : "shiva",
        lastName : "maheshwari",
        email : "shiva@gmail.com",
        age : 19
    },
    {
        firstName : "shiva",
        lastName : "maheshwari",
        email : "shiva@gmail.com",
        age : 10
    },{
        firstName : "shiva",
        lastName : "maheshwari",
        email : "shiva@gmail.com",
        age : 18
    }
]))
