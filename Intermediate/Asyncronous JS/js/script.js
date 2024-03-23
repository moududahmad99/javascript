console.log('====================================');
console.log('Asynchronous JavaScript ==>>');


// Callback 
console.log('Callback =>>');

function fetchD (callback) {
    setTimeout(() => {
        const data = "User's Data."
        callback(data)
    }, 2000)
}

function processData(data) {
    console.log('ProcessData: ' + data);
}

fetchD(processData)



// Promises 
console.log('Promises =>>');