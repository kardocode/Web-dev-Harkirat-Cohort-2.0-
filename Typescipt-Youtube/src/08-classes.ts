class Person {
    //Properites
    private name : string;
    protected age : number;
    public email : string;

    // Constructor
    constructor(name : string, age : number,email: string){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Methods
    public introduce() : string{
        return `Hi, I'm ${this.name} and I'm ${this.age} years old`
    } 
    // Getter
    public getName() : string{
        return this.name;
    }
    // Setter
    public setName(name:string):void{
        this.name = name;
    }
}

class Employee{
    constructor(
    private id : number,
    public name : string,
    protected department : string   
    ){}
    
    getDetail() : string {
        return `${this.name} works in ${this.department}`;
    }
}

let piyush = new  Employee(101,"piyush","Engineering");
console.log(piyush.getDetail());

class Manager extends Employee {
    constructor (
        id : number ,
        name : string,
        department : string,
        private teamSize : number,
    ){
        super(id,name,department);
    }

    getTeamInfo(): string{
        return `${this.name} manages ${this.teamSize} people`;
    }
}
let atarv = new Manager(102,"atharv","HR",432);
console.log(atarv.getTeamInfo());