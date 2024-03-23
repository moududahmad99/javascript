// Here's an example of destructuring an array:
console.log("Array Destructuring ---------");

const fruits = ['apple', 'orange', 'banana']

const [first, second] = fruits
console.log(first);

const [, , third, four = 'Joy Bangla'] = fruits
console.log(third);
console.log(four);


// Here's an example of destructuring an object:
console.log("Object Destructuring ---------");

const personAndProf = {
  name: 'Moudud',
  age: 21,
  prof: 'Developer'
}

const { name: myName, age: myAge, prof: profession } = personAndProf
console.log(myName);
console.log(myAge);
console.log(personAndProf);


// Here's an example of Nested destructuring an object:

console.log("Destructuring Nested Objects and Arrays: --------- ");

const personAndProfNested = {
  prof: 'Developer',
  profDetails: {
    profDesign: 'Web Designer',
    profDeveloper: 'Web Developer'
  },
  hobbies: ["coding", 'reading']
}

const { profDetails: { profDeveloper } } = personAndProfNested
console.log(profDeveloper);

const [, secondHobby] = personAndProfNested.hobbies
console.log(secondHobby);


// Destructuring Function Arguments
console.log('Destructuring Function Arguments: --------- ');

function greet({ name, age = 20 }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet({ name: "Moudud" });
greet({ name: "Sabbbir", age: 30 });
