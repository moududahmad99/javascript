// Creating Objects
console.log('====================================');
console.log('Creating Objects: ===>');

// Object Literal
console.log('Object Literal:');

const person = {
    name: 'Sabbir',
    age: 20,
    profession: 'Developer'
}
console.log(person);


// Constructor Function
console.log('Constructor Function:');

function PersonConstruct(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
}

const personConstruct = new PersonConstruct('Sabbir', 'Ahmad', 20)
console.log(personConstruct);



// Class (ES6+)
console.log('Class (ES6+):');

class es6Class {
    constructor(fName, lName) {
        this.firstN = fName;
        this.lastN = lName;
    }
}

const es6ClassVar = new es6Class('Moudud', 'Ahmad', 30);

console.log(es6ClassVar.firstN);
console.log(es6ClassVar['lastN']);

es6ClassVar.age = 30;

console.log(es6ClassVar.age);

delete es6ClassVar.lastN;
console.log(es6ClassVar.lastN); // Undefined

// Object Methods:
console.log('Object Methods:');

const calc = {
    addition: function (a, b) {
        return a + b
    },
    substract: function (a, b) {
        return a - b;
    },
    mult: function (a, b) {
        return a * b
    }
}

console.log(calc.addition(45, 55));
console.log(calc.substract(45, 55));
console.log(calc.mult(45, 55));



// Looping through Objects
console.log('Looping through Objects:');

for (const i in person) {
    console.log(i, person[i]);
}


// Object Methods and this:
console.log('Object Methods and this: ');

const personThis = {
    firstName: 'Sabbir',
    lastName: 'Ahmad',
    fullN() {
        return `${this.firstName} ${this.lastName}`
    }
};

console.log(personThis.fullN());


// Computed Property Names (ES6+):
console.log('Computed Property Names (ES6+):');

const ageStore = 'age';
const personEs6 = {
    fName: 'Moudud',
    [ageStore]: 20
}
console.log(personEs6.age);


// Object Prototypes and Inheritance
console.log('Object Prototypes and Inheritance: ');

const inherit = {
    prof() {
        this.profession = 'Software Developer';
    }
}

function fullName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

fullName.prototype = Object.create(inherit)
const nameStore = new fullName('Moudud', 'Ahmad');
nameStore.prof();
console.log(nameStore);



// Functions as first-class citizens
console.log('Functions as first-class citizens:');

const passingFunc = function(name) {
    return `Hello ${name}`
}

function applyFunc(func, value) {
    return func(value)
}

const greet = applyFunc(passingFunc, 'Moudud')
console.log(greet);