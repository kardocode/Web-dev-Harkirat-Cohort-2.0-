//Generic in TypeScript
function identity<MyType>(arg: MyType):MyType{
    return arg;
}

let output1 = identity<string>("Subscribe") 
let output2 = identity<number>(100); 

function getFirstElement<T>(arr: T[]):T[]{
    return arr;
}
