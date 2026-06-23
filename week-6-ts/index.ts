function greet(name:String):void{
    console.log("hello",name);
}

greet("shiva");

function first_ele(arr:number[]) :null | number{
    if(arr.length > 0){
        return arr[0] ?? null;
    }else{
        return null;
    }
}

console.log(first_ele([1,2]))
console.log(first_ele([1]))
console.log(first_ele([]))

function isAdult(age:number):boolean{
    return (age>=18)? true:false;
}

console.log(isAdult(19));
console.log(isAdult(1));
console.log(isAdult(18));