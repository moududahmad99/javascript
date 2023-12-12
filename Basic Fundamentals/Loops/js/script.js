// For Loop
console.log('====================================');
console.log('For Loop : ===> ');

/*
for (initialization; condition; increment/decrement) {
  // Code to be executed in each iteration
}
*/
// Looping with a specific range
for (let i = 0; i <= 4; i++) {
    console.log(i);
}

// Looping through an array backwards:
const numbers = [1, 2, 3, 4, 5]
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

// Skipping elements in a loop:
const words = ["apple", "banana", "cherry", "grapefruit", "mango"];
// for (let i = 0; i < words.length; i++) {
//     if (words[i].length < 6) {
//         continue
//     }
//     console.log(words[i]);
// }

// While Loop:
console.log('====================================');
console.log('While Loop : ===> ');

let numb = 2;

while (numb < 10) {
    console.log(numb);
    numb++;
}

// // Looping and breaking based on a condition
// let password = ""
// while (password.length < 8) {
//     password += prompt('Enter a valid password using your common sense:')
//     if (password.length >= 8) {
//         console.log('Your Password Accepted!');
//         break
//     }
//     alert('Yo!!! Enter a valid Password which suppossed to be equal or more than 8 letters.');
// } 

// Do-While Loop:
console.log('====================================');
console.log('Do-While Loop : ===> ');

let doWhile = 0;

do {
    console.log(doWhile);
    doWhile += 3
} while (doWhile < 10)


// let userInput;
// do {
//   userInput = prompt('Enter a number:');
// } while (isNaN(userInput));

// Nested Loops:
console.log('====================================');
console.log('Nested Loops : ===> ');

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log('i:' + i + ' | ' + 'j-' + j);
    }
}