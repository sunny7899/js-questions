// A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking of the main thread. However, it can lead to "callback hell" when there are multiple nested callbacks, making the code difficult to read and maintain.

// Promises are a more elegant way to handle asynchronous operations. They represent a value that may be available now, in the future, or never. Promises can be in one of three states: pending, fulfilled, or rejected. They allow for better error handling and chaining of asynchronous operations.



//  convert an existing callback API to promises? 

function divisionAPI (number, divider, successCallback, errorCallback) {
    if (divider == 0) {
        return errorCallback( new Error("Division by zero") )
    }
    successCallback( number / divider )
}

function divisionAPI(number, divider) {
    return new Promise(function(fulfilled, rejected) {
        if (divider == 0) {
            return rejected(new Error("Division by zero"))
        }
        fulfilled(number / divider)
    })
}

// Promise can be used with together async\await in ES7 to make the program flow wait for a fulfilled result
async function foo() {
    var result = await divisionAPI(1, 2); // awaits for a fulfilled result!
    console.log(result);
}

// Another usage with the same code by using .then() method
divisionAPI(1, 2).then(function(result) {
    console.log(result)
})