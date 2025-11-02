// Backticks -- String Interpolation;

const { prototype } = require("events");



const name = "shiva";
const repoCount = 50;

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh');
console.log(typeof gameName);

console.log(gameName.__proto__);

console.log(typeof name);