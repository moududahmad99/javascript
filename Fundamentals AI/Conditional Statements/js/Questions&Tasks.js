/*

- Questions: 



*/



// Checking the number is ODD or EVEN.

function checkNumber(n) {
  if (n % 2 === 0) {
    return "The number is Even!"
  } else {
    return "The number is Odd!"
  }
}

// spread method
function checkNumber2(n) {
  return n % 2 === 0 ? 'Even' : 'Odd'
}


// Write a function that checks if a number is positive, negative, or zero

function checkNumberType(number) {
  if (number > 0) {
      return "Positive";
  } else if (number < 0) {
      return "Negative";
  } else {
      return "Zero";
  }
}
console.log(checkNumberType(-5));  // Output: Negative