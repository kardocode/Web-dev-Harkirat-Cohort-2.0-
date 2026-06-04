// Axios vs fetch

// Fetch GET request

function main(){
    //before this , run the first.js file for the todo
    fetch("http://localhost:3000/todos")
        .then(async response =>{
            const json = await response.json();
            console.log(json);
            console.log(json.todos.length);
            //await response.txt();
        })
}

async function main2(){
    const response = await fetch("http://localhost:3000/todos");
    const json = await response.json();
    console.log(json.todos.length);
}

// main();
// main2();


// for fetch syntax 
// first make the call (like this "http://localhost:3000/todos")
// and if the call succesed then make another asyncronus call to make convert it into json (like this const json = await response.json();)

// using axios in GET Request

const axios = require("axios")
// use .get and .post requests to the call (like this const response = await axios.get("http://localhost:3000/todos"))

async function main3(){
    const response = await axios.get("http://localhost:3000/todos");
    console.log(response.data.todos.length);
    console.log(response.data);
}

// main3();

// using fetch Post request
//Post request
//send body
//send header 
async function main4(){
    const response = await fetch("https://www.postb.in/1780504310172-4154898803681",{
        method: "POST",
        body: {
            username : "gauransh",
            password : "123456"
        },
        headers:{
            "Authorization" : "Bearer 123"
        }
    });
    const json = await response.text();
    console.log(json)
}

// main4();

// using axios Post request
//Post request
//send body
//send header
async function main5(){
    const response = await axios.post("https://httpdump.app/dumps/c127fd4a-d8d0-410c-bccf-408e1cc105f4",{
        username : "gauransh",
        password : "123456" 
    },
    {
        headers:{
            "Authorization" : "Bearer 123"
        },
    },
 );
    console.log(response.data);
}

// main5();

// one more same axious request in different syntax : 

async function main6(){
    const response = await axios({
        url : "https://httpdump.app/dumps/c127fd4a-d8d0-410c-bccf-408e1cc105f4",
        method : "POST",     
        header : {
            "Authorization" : "Bearer 123"
        },
        data:{
            username : "marcus",
            password : "1234421"
        }
    });
    console.log(response.data);
}

main6();