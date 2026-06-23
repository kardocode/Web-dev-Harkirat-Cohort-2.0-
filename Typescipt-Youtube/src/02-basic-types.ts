// PRIMITIVE
let user :String = "Piyush";
let age : Number = 20;
let isAdmin :boolean = true;

//Arrays
let numbers: number[] = [1,2,3,4];
let name: String[] = ['1Raman',"fwaf"];

// Tuples
let person: [String,number] = ['pish',23];

enum color{
    red,
    blue,
    green,
}
let FavouriteColor : color = color.blue;

// Any (avoid when possible)

let randomvalue: any = 10;
randomvalue = "hello";
randomvalue = true;
randomvalue = [1,2,3];

//Unknown (Safer than any)
let userInput:unknown;
userInput = 5;
userInput = "text";

//void function
function subscribe(message: string):void {
    console.log("hello",message);
}

subscribe("what's up");