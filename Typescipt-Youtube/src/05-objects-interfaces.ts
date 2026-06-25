interface User{
    name:string;
    age:number; 
    email? :string;
    readonly id : number;
}

//object type annotation
let user: User = {
    name: "Piyush",
    age : 24,
    email:"@email.com",
    id : 2,
};

// Interface with methods

interface Product {
    name :string;
    price : number;
    getDiscount(percent:number):number;
}

let laptop : Product = {
    name: "MackBook Pro",
    price : 80000,
    getDiscount(percent : number):number{
        return this.price  * (percent/100);
    },
};

console.log("Discount -->")
console.log(laptop.getDiscount(10));
