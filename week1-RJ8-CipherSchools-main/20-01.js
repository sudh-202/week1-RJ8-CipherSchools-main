//1. map()

// let array = [1, 2, 3, 4, 5];
// let newArray = [];

// for (let i = 0; i < array.length; i++){
//     newArray[i] = array[i] * array[i];
// }

// console.log(newArray);

// let array = [5, 10, 15, 20];

// let newArray = array.map((element, index) => {
//     console.log(index);
//     return element * element;
// });
// console.log(newArray);

// let addTwoNumbers = (a, b) => a + b;
// let num1 = 4;
// let num2 = 5;
// addTwoNumbers(num1, num2);
//In Js, a function is also a Js Object


//2. foreach()

// let array = [1, 2, 3, 4, 5];
// array.forEach((element, index) => {
//     element *= element;
//     console.log(element);
// });

// console.log("Array is: ", array);

//3. filter()

// let array = [10, 20, 30, 40, 50];
// let newArray = array.filter((element) => element >= 30);
// console.log(newArray);

// let temp=array.findIndex((value) => {
//     return value < 0;
// });

// console.log(temp);

//4. sort()

// let array = [50, 40, 30, 20, 10];
// let sortedArray = array.sort((el1, el2) => {
//     el1 = Number(el1);
//     el2 = Number(el2);
//     return el1 - el2;
// });
// console.log(sortedArray);\

//Object Destructuring

// let details = {
//     name: "Alex",
//     age: 24,
//     address: {
//         street: "Brooklyn",
//         city: "New York",
//         state: "NY",
//         country: "USA",
//         passportDetails: {
//             passportNumber: "ABCD1234",
//         },
//     },
// };
// let passportNumber = details.address.passportDetails.passportNumber;
// console.log(passportNumber);

// let myName = details.name;
// let age = details.age;
// let { name:myName, age } = details;
// console.log(myName, age);

// let {
//     address: {
//         country,
//         passportDetails: { passportNumber },
//     },
// } = deatils;
// console.log(country, passportNumber);
// if(array1==array2)

// let obj1 = { name: "Shantanu",age:24 };
// let obj2 = { name: "Shantanu" };

// function areEqual(obj1, obj2) {
//     if (obj1 === obj2) {
//         return true;
//     } if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false;
//     }
//     for (let key of Object.keys(obj1)) {
//         if (typeof obj2[key] === "undefined") {
//             return false;
//         }
//         if (obj2[key] !== obj1[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(areEqual(obj1, obj2));


//Map and set

// let map = new Map();
// map.set(1, "Shantanu");
// map.set(2, "Alex");
// console.log(map);

// let set = new Set();
// set.add(1);
// set.add(1);
// set.has();
// console.log(set);

//Class

class Animal{
    noOfLegs;
    color;
    family;
    sound;
    constructor(noOfLegs, color, family, sound) {
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }

    showAnimal() {
        console.log(`This animal belongs to family ${this.family}`);
    }
}

let animal = new Animal(4, "brown", "rodent","something");
// console.log(animal);
animal.showAnimal();