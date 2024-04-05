#! /usr/bin/env node
console.log("Welcome to my calculator");
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    { message: "Select one Arithmetic Operation:",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Percentage", "Power"] }
]);
if (answer.operator === "Addition") {
    console.log("Answer:" + " " + (answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Percentage") {
    console.log("Answer:" + " " + (answer.firstNumber / answer.secondNumber) * 100 + "%");
}
else if (answer.operator === "Power") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else
    ("Please select a valid operator");
