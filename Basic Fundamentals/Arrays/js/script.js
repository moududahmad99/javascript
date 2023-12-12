// Creating Array
let emptyArray = [];
let numbers = [1, 2, 3, 4, 5, 30];
let subjects = ['Math', 'Chemistry', 'Physics'];


// Accessing Array
console.log(`Output: ` + numbers[1]);

// Modifying Array
numbers[2] = 'Jadu'

console.log(numbers);


// Array Methods
numbers.push('Bing')
console.log(numbers);

numbers.pop()
console.log(numbers);

numbers.unshift('unshift') // Adding elements to the first beginning
console.log(numbers);


numbers.shift() // Removing the first element
console.log(numbers);



// Concatenating Arrays
let fruits1 = ['strawberry', 'blueberry'];
let fruits2 = ['Apple', 'grape'];
let allFruits = fruits1.concat(fruits2)

console.log(allFruits);





// Iterating through Arrays


iterates = ['iterates1', 'iterates2', 'iterates3']
// for loop
console.log('forLoop ===> ');

for (let x = 0; x < iterates.length; x++) {
    console.log(iterates[x]);
}

// Do while
console.log('Do while ===> '); 
let x = 0
do {
    console.log(iterates[x]);
    x++
} while (x < iterates.length)

// forEach
console.log('forEach ===> '); 
iterates.forEach(function(item) {
    console.log(item);
})

// maping
console.log('Maping ===> '); 

let upperCase = iterates.map(function(item) {
    return item.toUpperCase();
})
console.log(upperCase);

// filter
console.log('Filter ===> '); 

let filterArray = iterates.filter(function(item) {
    return item.length > 3
})

console.log(filterArray);

// Multidimentional Array
console.log('matrix ===> '); 

let matrixxx = [
    [1,2,3],
    [10,20,30],
    [100,200,300],
]

console.log(matrixxx[2][0]);



// Array Destructuring
console.log('====================================');
console.log('Array Destructuring ===> '); 

let [arrDestructuring_1, arrDestructuring_2, arrDestructuring_3] = [90, 900, 9000, 45];
console.log(arrDestructuring_3);


// Spread Method
console.log('====================================');
console.log('Spread Method ===> '); 

let spreadArr = [1,45,99]
let cpSpread = [...spreadArr]
let mergedArr = [...cpSpread, 55, 90]

console.log(mergedArr);


// Array.find() and Array.findIndex():

console.log('====================================');
console.log('Array.find() and Array.findIndex(): ===> '); 

let findNum = [10, 20, 30, 40, 50];
let foundNum = findNum.find( number => number > 25 )
let foundIndex = findNum.findIndex(number => number > 11)
console.log(foundNum);
console.log(foundIndex);

// Array.filter() with Objects:

console.log('====================================');
console.log('Array.filter() with Objects: ===> '); 

let std = [
    {name: 'Moudud', score: 39},
    {name: 'Hamid', score: 52}
]

let topStd = std.filter(para => para.score > 40);
console.log(topStd);

// Chaining Array Methods:

console.log('====================================');
console.log('Chaining Array Methods: ===> ');

let numberSqr = [1,2,3,4,5,6];
let doubleEvenSqr = numberSqr.filter(number => number % 2 === 0).map( number => number * number ).map( number => number * 2)

console.log(doubleEvenSqr);