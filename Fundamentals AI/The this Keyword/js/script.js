console.log('====================================');
console.log('The this Keyword');

// Global Context
console.log('Global Context =>> ');

console.log(this === window);

// Function Context
console.log('Function Context =>> ');
function hey() {
    console.log(this === window); // true
}
hey()


const sayingHello = {
    name: 'Labib',
    nameInFunc: function () {
        console.log(`Hello to ${this.name}`);
    }
} 
sayingHello.nameInFunc()


// Constructor Function:
console.log('Constructor Function =>> ');

function Car(brand, model) {
    this.brand = brand
    this.model = model
}

const myCar = new Car ('Toyota', 'Corolla')
console.log(myCar);


// Explicitly Changing this Context:
console.log('Explicitly Changing this Context =>> ');

const person1 = {
    name: 'Rock',
    nameFunc: function() {
        console.log(`Hey, This is ${this.name}`);
    }
}

const person2 = {
    name: 'Brock'
}

person1.nameFunc()
person1.nameFunc.call(person2)