console.log("Calculator Started...");

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

console.log("Operation:", operation);
console.log("First Number:", num1);
console.log("Second Number:", num2);

if (operation === undefined) {
    console.log("Error: Please provide an operation.");
    console.log("Use: add, subtract, multiply, divide");
} else if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please enter valid numbers.");
} else {
    switch (operation) {

        case "add":
            console.log("Result:", num1 + num2);
            break;

        case "subtract":
            console.log("Result:", num1 - num2);
            break;

        case "multiply":
            console.log("Result:", num1 * num2);
            break;

        case "divide":
            if (num2 === 0) {
                console.log("Error: Cannot divide by zero.");
            } else {
                console.log("Result:", num1 / num2);
            }
            break;

        default:
            console.log("Error: Invalid operation.");
            console.log("Use: add, subtract, multiply, divide");
    }
}

console.log("Calculator Finished.");