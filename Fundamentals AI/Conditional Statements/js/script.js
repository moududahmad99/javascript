
/* JavaScript Control Flow Statements

Conditional Statements and Loops in JavaScript (Using if…else structures and loops (like for and while) to control program flow based on conditions and execute code repeatedly).

- return Statement
- break Statement
- continue Statement
- throw Statement
- if…else Statement
- switch Statement
- try…catch Statement



*/

// Return Statement
// It stops the functions and give back a value

function addition(c, y) {
    return c + y;
}

console.log(addition(45, 6));

// Break Statement
// It stops a loop or switch case early

for (i = 0; i <= 5; i++) {
    if (i == 3) break;
    console.log(i);
}

// Continue Statement
// It skips the rest of the current loop and goes to the next loop

for (let i = 0; i <= 5; i++) {
    if (i == 3) continue;
    console.log(i); // Output 0 1 2 4 5
}

// if…else Statement: 
// Runs code based on whether a condition is true or false.

function gradeAssignment(score) {
    if (score > 80) {
        return 'A'
    } else if (score > 60) {
        return 'C'
    } else {
        return 'F'
    }
}

// Test cases
console.log(gradeAssignment(95)); // Output: 'A'
console.log(gradeAssignment(78)); // Output: 'C'
console.log(gradeAssignment(42)); // Output: 'F'

// switch Statement: 
// Compares a value against multiple cases and runs the matching case's code.

let Number = 1;

switch (Number) {
    case 1:
        console.log('You choose one');
        break;
    case 2:
        console.log('You choose two');
        break;
    default:
        console.log("Unknown number!");

}

// throw Statement: 
// Creates and throws a custom error, stopping the current code execution

function checkAge(age) {
    if (age < 20) {
        throw 'too young!'
    } else {
        return 'Welcome'
    }
}

try {
    console.log(checkAge(18));
} catch (error) {
    console.log("Error: " + error);
}