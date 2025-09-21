// app.js = Main application file
// This file will import and use functions from the calculator and formatter modules.
// Importing built-in modules
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";

// Importing third-party modules
import chalk from "chalk";

// Importing custom modules
import { add, subtract, multiply, divide } from "./my_module/calculator.js";
import { formatName } from "./my_module/formatter.js";

// ============= Usage ============
// Printing Registration Number
console.log(chalk.blue("Registration Number: BD/2025/TC3/064"));

// Using the built-in path module
const __filename = fileURLToPath(import.meta.url);
console.log(chalk.green("Current file basename: " +
    path.basename(__filename)));

// Using the custom formatter module
console.log(chalk.yellow("Formatted Name: " +
    formatName("Daniel", "Harrison")));

// ============ USER INTERACTIONS ============
// Setting up readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt user for two numbers and an operation
rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        rl.question("Choose operation (add, subtract, multiply, divide): ", (operation) => {
            let result;
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            try {
                switch (operation.toLowerCase()) {
                    case "add":
                        result = chalk.magenta(`Result: ${add(a, b)}`);
                        break;
                    case "subtract":
                        result = chalk.blue(`Result: ${subtract(a, b)}`);
                        break;
                    case "multiply":
                        result = chalk.green(`Result: ${multiply(a, b)}`);
                        break;
                    case "divide":
                        result = chalk.yellow(`Result: ${divide(a, b)}`);
                        break;
                    default:
                        result = chalk.red("Invalid operation selected.");
                }
            } catch (error) {
                result = chalk.red(`Error: ${error.message}`);
            }
            console.log(result);
            rl.close();
        });
    });
});