// Basic Understanding of Closures:

console.log('====================================');
console.log('Basic Closures:');

function outer() {
    const outerV = 'This is from outside'

    function inside() {
        console.log(outerV);
    }

    return inside;
}

const outV = outer()
outV()


// Closures and Private Data
console.log('====================================');
console.log('Closures and Private Data =>>:');


function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    }
}

let incr = counter()
incr() // 1
incr() // 2


// Closures in Asynchronous JavaScript:
console.log('====================================');
console.log('Closures in Asynchronous JavaScript: =>>:');

function delayMsg(msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay)
}

// delayMsg('I\'m showing myself after 4 second', 4000)

// Closure in loop

// for (let x = 0; x < 10; x+=2) {
//     setTimeout(function(){
//         console.log(x);       
//     }, 1000)
// }

// Closures and Currying
console.log('====================================');
console.log('Closures and Currying: =>>:');

function addit(x) {

    return function(y) {
        return x + y
    }
}

const addit5 = addit(52)
console.log(addit5(101));