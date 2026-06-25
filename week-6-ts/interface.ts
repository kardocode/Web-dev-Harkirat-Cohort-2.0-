interface Person{
    name : string;
    age: number;
    greet(phrase:string) : void;
}

class Manager implements Person{
    name : string;
    age : number;

    constructor(name : string,age:number){
        this.name = name;
        this.age = age;
    }
    greet(phrase : string){
        console.log("hi there sir"+phrase);
    }
}

class Employee implements Person{
    name : string;
    age : number;

    constructor(name : string,age:number){
        this.name = name;
        this.age = age;
    }
    greet(phrase : string){
        console.log("kaam kar le"+phrase);
    }
}

