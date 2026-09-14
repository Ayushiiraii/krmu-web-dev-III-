const crypto = require("crypto");
const fs = require("fs");

let history = "";

for (let i = 1; i <= 5; i++) {

    const dice = crypto.randomInt(1, 7);

    console.log("Dice Rolled:", dice);
    history += `Roll ${i}: ${dice}\n`;
}

// Bonus: store dice roll history in a text file
fs.appendFile("dice-history.txt", history, (err) => {
    if (err) {
        console.log("Error saving history:", err);
    } else {
        console.log("Dice history saved to dice-history.txt");
    }
});