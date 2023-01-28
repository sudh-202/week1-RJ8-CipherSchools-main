//In JavaScript we can declare  a variable in 3 ways
//1. by using var
//2. by using let
//3. by using const

//var is globally scoped


// var myName = "John";
//var myName="Joe";//we can redeclare in var
// console.log(myName);

// const myName = "John";
// console.log(myName);
// myName = "Alex"//this will show error because we can't change the value

// const myName = [];
// //myName = 5;//this is allowed because we are reassigning the variable
// console.log(myName);
// myName.push("John");//now as we are using array so we can put multiple values
// console.log(myName);

//const myName = 5; // we will get an error because we can't re declare the variable

// let myName = "John";
// console.log(myName);
// myName = "Alex";// we can reassign in let
// console.log(myName);
// myName = 5;
// console.log(myName);
//let myName = "Taylor";//we cannnot redeclare the variable

//String Interpolation

// let firstName = "Shantanu";
// let lastName = "Shubham";
// //console.log(firstName + " " + lastName);
// //let fullName=firstName + " " + lastName
// let fullName = `${firstName} ${lastName}`;//same as previous line
// console.log(fullName);

//["Shantanu"]["Shubham"][" "]["Shantanu "]["Shantanu Shubham"][][][]
//                                            fullName


//Default Params

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// let addTwoNumbers = (num1, num2) => {//arrow function
//     return num1 + num2;
// };

//let addTwoNumbers = (num1, num2) => num1 + num2;
// let addTwoNumbers = (num1, num2) => {
//     console.log(num1);
//     console.log(num2);
//     return num1 + num2;
// }
// console.log(addTwoNumbers(1, 10));

//Rest and Spread Operator are applicable in arrays and objects in JS
// let array = [5, 10, 15, 20, 25];
//Spread Operator ->...
// console.log(array);
// let newArray = [...array,30,35,40];//it will have the elements of old array and new elements 30,35,40
// console.log(array);

//Rest -> ...
//let testFunction = (...args){
    // console.log(args);
//};

//let maxOfTwoNumbers = (num1, num2) => Math.max(num1, num2);
// let maxofNumbers = (...numbers) => {
//     let maximum = Number.MIN_VALUE;
//     for (let number of numbers) {
//         maximum = Math.max(maximum, number);
//     }
//     return maximum;
// };

// console.log(maxofNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// let maxofThreeNumbers = (num1, num2, num3) => Math.max(num1, Math.max(num2, num3));

//For Object
let object = {
    name: "John",
    age: 24,
    address: {
        city: "New York",
        state: "NY",
        country: "USA",
    },
};
// let object2 = { ...object };
let object2 = JSON.parse(JSON.stringify(object));
object2.address.city = "Newark";
console.log(object2);