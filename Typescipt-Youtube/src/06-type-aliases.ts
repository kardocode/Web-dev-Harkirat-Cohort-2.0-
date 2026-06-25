// Type alias
type Point = {
    x : number;
    y : number;
};

let point: Point = {x:10,y:20}

// Type alias for Primitive
type ID =  string | number

let userId : ID = "piyush123";
let productId : ID = 341;

// Type alias vs Interface

// Interface can be extended , type aliases cannot
interface Animal {
    name :string;
}
interface Animal {
    age : number;
}

let dog : Animal = {
    age :3,
    name : "budy"
}
