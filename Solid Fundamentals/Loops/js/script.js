// For Loop
console.log('====================================');
console.log('For Loop : ===> ');

/*
for (initialization; condition; increment/decrement) {
  // Code to be executed in each iteration
}
*/

for (let i = 0; i <= 4; i++) {
    console.log(i);
}

// While Loop:
console.log('====================================');
console.log('While Loop : ===> ');

let numb = 2;

while (numb < 10) {
    console.log(numb);
    numb++;
}

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
    for (let j = 1; j <=3; j++) {
        console.log('i:' + i + ' | ' + 'j-' + j);
    }
}