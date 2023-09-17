console.log('====================================');
console.log('Callback ==>>');

/*
Callbacks are functions that are passed as arguments to other functions and are executed later when certain operations are completed.
*/

// Basic Callback

function introduce(name, callBack) {
    console.log('I\'m ' + name);
    callBack()
}

function bye() {
    console.log('See You.');
}

introduce('Moudud', bye)


// Using Callbacks for Asynchronous Operations
console.log('Using Callbacks for Asynchronous Operations =>>');

function fetchData(callback) {
    setTimeout(function () {
        const data = 'User\'s Data.'
        callback(data)
    }, 2000)
}

function processData(data) {
    console.log('Processed: ' + data);
}

fetchData(processData)



// Using Callbacks with Array Methods
console.log('Using Callbacks with Array Methods =>>');

const numbers = [1, 2, 3, 4, 5, 6];

function double(number) {
    return number * 2
}

const doubledN = numbers.map(double)
console.log(doubledN);