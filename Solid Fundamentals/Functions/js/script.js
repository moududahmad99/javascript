// Defining a Function:
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('Alexxxxx');


// Parameters and Arguments:
function add(a, b) {
    console.log(a + b)
}

add(5, 189)


// Return
function add2(a, b) {
    return a + b
}

let res = add2(5, 189)
console.log(res);


// Anonymous Functions and Function Expressions:
console.log('Anonymous Functions and Function Expressions:');


let annoFunc = function (favSub) {
    return 'favourite subject: ' + favSub;
}

let annFunc = annoFunc('Chemistry')
console.log(annFunc);


// Arrow Functions (ES6):
console.log('Arrow Functions (ES6) :');

let square = (x) => x * x;
console.log(square(41));


// Scope and Closures
console.log('Scope and Closures');

function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }
    return inner
}

let innerFunc = outer()
innerFunc()


// Function Hoisting
console.log('Function Hoisting');

/*
Function declarations are hoisted to the top of their scope, so you can call a function before its definition.
*/

func4('Hoisting example')

function func4(para) {
    console.log(para);
}


// Default Parameters (ES6)
console.log('Default Parameters (ES6)');

function power(base, exponent = 2) { // 2 is default
    return Math.pow(base, exponent)
}

console.log(power(3));
console.log(power(3, 4));


// Rest Parameters (ES6):
console.log('Rest Parameters (ES6):')

function RestFunction(...para) {
    return para.reduce((total, nums) => total + nums, 0)
}

console.log(RestFunction(1, 2, 3, 10, 44));
console.log(RestFunction(4, 5));



// Function Overloading
console.log('Function Overloading : ');

function OverLoad(para) {
    if (para === 'undefined') {
        console.log('Hello Guest!');
    } else {
    console.log('Hello ' + para);
    }
}


OverLoad('Me')
OverLoad()