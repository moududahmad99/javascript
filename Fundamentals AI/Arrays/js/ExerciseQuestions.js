console.log('------------------- Exercise Array One -------------------');

// Questions: How to merge two arrays and remove duplicate items in JavaScript?

// Method 1

let arr1 = ['Sabbir', 'Ahmad', 'Moudud']
let arr2 = ['Farhad', 'Ahmad']

let Arr = arr1.concat(arr2)
let mergeArr = [...new Set(Arr)]

console.log(mergeArr);

// Method 2

let FilterArr = arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0))
console.log(FilterArr);


console.log('------------------- Exercise Array Two -------------------');

// Questions: How to find the sum of all elements of a given array in JavaScript?

let sumArr = [2, 22, 76, 8]
let sum = 0

// Method 1 

// for (let x = 0; x < sumArr.length; x++) {
//   sum += sumArr[x]
// }

// console.log("Sum of the Array : ", sum);

// Method 2

sumArr.forEach(i => {
  sum += i
})

console.log("Sum :", sum);