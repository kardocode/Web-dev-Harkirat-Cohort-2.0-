function objectMethod(obj){
    console.log("Original Object:",obj);
    
    let keys = Object.keys(obj);
    console.log("After Object.keys()",keys);
    
    let values = Object.values(obj);
    console.log("After object.values()",values);

    let entries = Object.entries(obj);
    console.log("After Object.entries()",entries);
    
    let hasPop = Object.hasOwnProperty(obj);
    console.log("After hasOwnProperty",hasPop);
    
    let newObj = Object.assign({},obj,{ newPoperty: "newvlaue"})
    console.log("After Object.assign():",newObj);
}


const value = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
}

objectMethod(value)