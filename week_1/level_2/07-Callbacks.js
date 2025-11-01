function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumOfSquare(a,b){
    return square(a) + square(b);
}

console.log(sumOfSquare(9,1));

function sumOfCube(a,b){
    return cube(a) + cube(b);
}

console.log(sumOfCube(2,1));


// We are repeating the logic multiple time

// for this we will use Callbacks

function SumofSomething(a,b,fn){
    console.log(fn);
    
    const val1 = fn(a);
    const val2 = fn(b);
    
    return val1 + val2;
}

console.log(SumofSomething(2,1,square));
console.log(SumofSomething(2,1,cube));
