// Prototypal inheritance

console.log('====================================');
console.log('Prototypal inheritance =>>');


// Basic Prototypal inheritance
console.log('Basic Prototypal inheritance =>>');

const animalPrototype = {
    speak() {
        console.log(`${this.pet} makes a sound`);
    }
}

const cat = Object.create(animalPrototype)
cat.pet = 'Cat'
cat.speak()

console.log('another one.');

// constructor Func
function second(name) {
    this.name = name;
}

// Adding prototype
second.prototype.bark = function() {
    console.log(`${namee} barks`);
}

// instances

const dog1 = new second('foth')
const dog2 = new second('rip')

dog1.bark()

// Constructor Functions and Prototypal Inheritance
console.log('Constructor Functions and Prototypal Inheritance =>>');

function Animal(name) {
    this.pet = name
}

Animal.prototype.speak = function() {
    console.log(`${this.pet} makes a sound`);
}

const cat1 = new Animal('Cat')
const dog = new Animal('Dog')

cat1.speak()
dog.speak()


// Inheritance Chain
console.log('Inheritance Chain =>>');


function Persons(parameter) {
    this.something = parameter
}

Persons.prototype.greet = function() {
    console.log(`${this.something} to my friends`);
}

