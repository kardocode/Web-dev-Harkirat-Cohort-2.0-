
const submit  = document.querySelector('.submit');


const result = document.getElementById("final-Sum");

submit.addEventListener('click',()=>{
    const one = parseInt(document.querySelector('.one').value);
    const two = parseInt(document.querySelector('.two').value);

    result.textContent = one+two;
})

console.log(submit);