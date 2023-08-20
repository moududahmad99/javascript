// Primitive Data Types:

// Number
let num = 42.5;

// String
let str = 'Hello, world';

// Boolean
let isTrue = true;

// Undefined
let notDefined;

// Null
let nothing = null;

// Symbol
let uniqueSymbol = Symbol('description');

// BigInt
let bigIntValue = 1234567890123456789012345678901234567890n;


// Reference Data Types:

// Object
let person = {
    name: 'Sabbir',
    age: 21
}

// Array
let Persons = ['Mahek', 'Hamid']

function greeting(name) {
    console.log(`Hello ${name}`);
}
greeting('Mrittika') // calling the function


// Type Coercion

let numStr = '42'
let Type = Number(numStr)

console.log(Type + 10);

// NaN and isNaN():

let result = 10 / 'abc'; // NaN
console.log(isNaN(result)); // Output: true



console.log('Truthy and Falsy Values: ');
let falsyValue = ''; // Falsy value
let truthyValue = 'Hello'; // Truthy value

if (falsyValue) {
  console.log('Falsy');
}

if (truthyValue) {
  console.log('Truthy ');
}


console.log('typeof Operator: ');
let typeOFFF = 4555
let typeOFF = 'String'
console.log(typeof typeOFFF);
console.log(typeof typeOFF);
