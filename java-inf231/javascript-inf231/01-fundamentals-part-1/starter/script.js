// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);


// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31; 
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// const country = "Portugal";
// const language = "Portuguese";
// const population = 10;

// age = 25;
// age = 26; //this will change

// // let firstName;
// // let myCurrentJob;
// // const PI 

// console.log("=== DATA TYPES ===");

// //number
// let id = 12345;
// console.log(id);
// console.log(typeof id);

// //string
// let lastName = "Jonas";
// console.log(lastName);
// console.log(typeof lastName);

// //boolean
// let JavaScriptIsFun = true;
// console.log(JavaScriptIsFun);
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);


////////////////////////////////////
// Basic Operators - Math operators
console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math operations:");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

// Math with strings!
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);
console.log("Hello " + "World" + "!");
console.log("I am " + 25 + " years old");

// Assignment operators
console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5; // 15
console.log("x starts as:", x);

x += 10;
console.log("After x += 10:", x);

x *= 4;
console.log("After x *= 4:", x);

x /= 2;
console.log("After x /= 2:", x);

x++;
console.log("After x++:", x);

x--;
x--;
console.log("After x-- twice:", x);

////////////////////////////////////
// Comparison operators
console.log("=== COMPARISON OPERATORS ===");

console.log("Age comparison:");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30);

console.log("Number comparisons:");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);

const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge);

const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older:", isJonasOlder);

console.log("Complex comparison:");
console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageJonas + ageSarah) /2;
console.log (ageJonas, ageSarah, averageAge)


// Operator Precedence
console.log("=== OPERATOR PRECEDENCE ===");


// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn)

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);