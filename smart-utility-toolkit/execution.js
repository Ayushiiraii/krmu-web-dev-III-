// execution.js

const fs = require("fs");

console.log("===== Smart Utility Toolkit - Execution Analysis =====");

console.log("1. Program started");

// Track a synchronous operation
console.log("2. Starting synchronous operation");

const numbers = [1, 2, 3, 4, 5];

console.log("Numbers:", numbers);

console.log("3. Synchronous operation completed");

// Track an asynchronous file operation
console.log("4. Starting asynchronous file operation");

fs.writeFile(
    "./execution-test.txt",
    "This file was created during execution analysis.",
    (err) => {
        if (err) {
            console.log("Error creating file:", err.message);
            return;
        }

        console.log("6. File created successfully.");

        fs.readFile("./execution-test.txt", "utf8", (err, data) => {
            if (err) {
                console.log("Error reading file:", err.message);
                return;
            }

            console.log("7. File read successfully.");
            console.log("File content:", data);

            fs.unlink("./execution-test.txt", (err) => {
                if (err) {
                    console.log("Error deleting file:", err.message);
                    return;
                }

                console.log("8. Temporary file deleted successfully.");
                console.log("9. File operation completed.");
            });
        });
    }
);

console.log("5. Program continues while asynchronous operation is running");

console.log("10. Program reached the end.");