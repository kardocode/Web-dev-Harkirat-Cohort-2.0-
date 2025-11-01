// const dog = {
//     name: "bruno",
//     legcount: 2,
//     speaks: "bhow-bhow"
// }
// const cat = {
//     name: "kello",
//     legcount: 2,
//     speaks: "meow"
// }

//// animal x bhow bhow with 2 legs

//// console.log("animal " +dog["name"] +" "+dog["speaks"]);
//// console.log("animal " +cat["name"] +" "+ cat["speaks"]);

// function printStr(animal){
//     console.log("animal "+ animal["name"]+" "+animal["speaks"]);
// }

// printStr(dog);
// printStr(cat);

// to give structure we use calsses

class Animal {
    constructor(name,legcount,speaks){
        this.name = name;
        this.legcount = legcount;
        this.speaks = speaks;
    }
    speak() {
        console.log("hi there "+this.speaks);
        
    }
}

let dog = new Animal("dog",4,"bhow-bhow");
let cat = new Animal("cat",4,"meow");

cat.speak(); // call function on object


 