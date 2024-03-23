// Arithmetic Operator
console.log('====================================');
console.log('Arithmetic Operator ===>');
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y); 
console.log(x * y); 
console.log(x / y);
console.log(x % y); 
console.log(x ** y);


// Assignment Operator
console.log('====================================');
console.log('Assignment Operator ===>');
let a = 5
a += 2
console.log(a);

a *= 4
console.log(a); // Not 20 its 28


// Comparison Operators:
console.log('====================================');
console.log('Comparison Operators: ===>');

let num1 = 10;
let num2 = 5;

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 === num2);
console.log(num1 !== num2);

// Logical Operators:
console.log('====================================');
console.log('Logical Operators: ===>');

let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse);
console.log(isTrue || isFalse);
console.log(!isFalse);


// Unary Operators:
console.log('====================================');
console.log('Unary Operators: ===>');

let UnaryOp = 10

console.log(-UnaryOp);
console.log(+UnaryOp);
console.log(++UnaryOp);
console.log(--UnaryOp);


// Ternary (Conditional) Operator:
console.log('====================================');
console.log('Ternary (Conditional) Operator: ===>');


let adultCheck = 20;
let isAdult = adultCheck >= 18 ? 'Yes' : 'No' 
console.log(isAdult);




// Typeof Operator:
console.log('====================================');
console.log('Typeof Operator: ===>');

console.log(typeof 42); 
console.log(typeof 'Hello');


// Instanceof Operators:
console.log('====================================');
console.log('Instanceof Operators: ===>');

let arr = [1, 2, 3];
console.log(arr instanceof Array);


// Bitwise Operators (Advanced):
console.log('====================================');
console.log('Bitwise Operators (Advanced): ===>');

let bitwiseX = 5;
let bitwiseY = 3;

console.log(bitwiseX & bitwiseY);
console.log(bitwiseX | bitwiseY);
console.log(bitwiseX ^ bitwiseY);
console.log(~bitwiseX);
console.log(bitwiseX << 1);
console.log(bitwiseX >> 1);
