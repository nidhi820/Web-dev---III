const isEven = require("./evenChecker");

console.log("Custom Module Demo Started...");

const number1 = 10;
const number2 = 7;

console.log(number1 + " is even:", isEven(number1));
console.log(number2 + " is even:", isEven(number2));

console.log("Custom Module Demo Finished.");