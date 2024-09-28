
console.log(myVar); // undefined
var myVar = 10


// ReferenceError: Cannot access 'myVar' before initialization
// console.log(myVar2); 
// let myVar2 = 10;



/*
Scope:

Global Scope: Variables declared outside any function are in the global scope.
Local Scope: Variables declared inside a function are in the local scope.
Block Scope: Introduced with let and const, variables are scoped to the nearest 
*/

function exampleScope() {
    var localVar = `This is local`
    if (true) {
        let blockVar = 'This is block var'
        console.log(localVar);
    }

    //  Not defined 
    // console.log(blockVar);
}

console.log(exampleScope());

// Variable Shadowing 

var x = 10;
function example() {
  var x = 20;
  console.log(x); // Output: 20
}
example();
console.log(x); // Output: 10


var globalVar = 42;
console.log(window.globalVar); // Output: 42


let globalVarUnd = 42;
console.log(window.globalVarUnd); // Output: undefined
