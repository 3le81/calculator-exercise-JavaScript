const readline = require('readline-sync');

function printWelcomeMessage() {
    console.log('Welcome to the Calculator!');
    console.log('======================================');
};

printWelcomeMessage();

function performOneCalculation() {
    console.log('How many numbers do you want to add?');
    let count = parseInt(readline.prompt()); // Parse count as an integer

    let numbers = []; // Array to store the numbers

    // Loop to read the numbers and put them into the array
    for (let i = 0; i < count; i++) {
        console.log('Please enter number ' + (i + 1) + ':');
        const number = parseFloat(readline.prompt());
        numbers.push(number); // Add the number to the array
    }

    // Calculate the sum of the numbers in the array
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }


    // Display the sum
    console.log('The sum is: ' + sum);
};

performOneCalculation();

// ================ exercise operations =================
// console.log('Please enter the operator:');
// let operator = readline.prompt();
// const readline = require('readline-sync');
// console.log('Please enter number 1:');
// const firstNumber = readline.prompt();
// console.log('Please enter number 2:');
// const secondNumber = readline.prompt();
// let result = 0;
// if (operator === '+') {
//     result = parseFloat(firstNumber) + parseFloat(secondNumber);
// }
// else if (operator === '-') {
//     result = parseFloat(firstNumber) - parseFloat(secondNumber);
// }
// else if (operator === '*') {
//     result = parseFloat(firstNumber) * parseFloat(secondNumber);
// }
// else if (operator === '/') {
//     result = parseFloat(firstNumber) / parseFloat(secondNumber);
// };

// console.log('This is your result: ' + result);
