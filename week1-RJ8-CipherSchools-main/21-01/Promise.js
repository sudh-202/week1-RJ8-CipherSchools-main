//Promise is a class in JS
//constructor (function)

// let promise = new Promise((fulfilled, notFulfilled)=> {
//     let num1 = 10;
//     let num2 = 15;
//     let sum = num1 + num2;
//     if (sum > 24) {
//         fulfilled(sum);
//     } else {
//         notFulfilled(new Error("Promise not fulfilled"));
//     }
// });

function addTwoNumbers(num1, num2) {
    //2,3
    return new Promise((fulfilled, notfulfilled) => {
        setTimeout(() => {
            console.log("Inside setTimeout");
            sum = num1 + num2;
        }, 5000);
        notfulfilled(new Error("An error occured!"));
    });
}    

addTwoNumbers(10,5)
     .then(() => {
         console.log("Promise was fulfilled");
})
    .catch(() => {
        console.log("Promise was not fulfilled");
    });


// function addTwoNumbers(num1, num2) {
//     //2,3
//     let myPromise = new Promise((fulfilled, notfulfilled) => {
        
//     })
//     setTimeout(() => {
//         console.log(num1 + num2);
//         sum = num1 + num2;
//     }, 5000);
//     console.log(num1 + num2);
//     return sum;
// }

// console.log(addTwoNumbers(2, 3));