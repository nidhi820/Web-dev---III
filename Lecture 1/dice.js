const crypto = require("crypto");

console.log("Dice Generator Started...");

function rollDice() {
    return crypto.randomInt(1, 7);
}

const numberOfRolls = 5;

for (let i = 1; i <= numberOfRolls; i++) {
    console.log(`Roll ${i}: Dice Rolled: ${rollDice()}`);
}

console.log("Dice Generator Finished.");