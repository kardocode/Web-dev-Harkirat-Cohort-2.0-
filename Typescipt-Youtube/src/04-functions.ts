function add(a:number , b : number) : number {
    return a + b;
}

console.log(add(1000,3434.3234));

// optional Paramteres:

function greet(name:String,greeting?:string):string{
    if(greeting){
        return `${greeting},${name}`
    }else{
        return `Hello ${name}!`;
    }
}

console.log(greet("arnav"));
console.log(greet("arnav","what's up "));

// Rest parameters
function sum(...numbers:number[]) :number{
    return numbers.reduce((total,n)=>total+n,0)
}

console.log(sum(1,2,3,4,5,3,132))

// Arrow functions 
const divide = (a:number,b:number):number => a/b;

//function types
let calculate :(x:number , y : number) => number;
calculate = divide;

