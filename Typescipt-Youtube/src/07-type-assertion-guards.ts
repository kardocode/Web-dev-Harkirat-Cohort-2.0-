// Type assertions
let someValue : unknown = "Suscribe to RoadsideCoder";
let strLength : number = (someValue as string).length;
//Or

let strLength2 : number = (<string>someValue).length;

console.log(strLength2);

// Type guards
 
function processValue(value: string | number){
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    }else{
        console.log(value.toFixed(2));
    }
}

processValue("hello what's up");
processValue(23132); // o/p => 23132.00

//instance of type guard
class Dog {
    bark(){
        console.log("WOOF!")
    }
}

class Cat{
    meow(){
        console.log("MEOW!");
    }
}

function makeSound(animal:Dog | Cat){
    if(animal instanceof Dog){
        animal.bark();
    }else{
        animal.meow();
    }
}

const cat = new Cat();
makeSound(cat);