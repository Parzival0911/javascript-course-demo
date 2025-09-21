// // console.log("Part 2: Functions ready!");

// // ////////////////////////////////////
// // // Functions - Declarations and Expressions
// // console.log("=== FUNCTIONS ===");

// // // Function declaration
// // function logger() {
// //   console.log("My name is Jonas");
// // }

// // // Calling / running / invoking the function
// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apples, oranges) {
// //   console.log(apples, oranges);
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //   return juice;
// // }

// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);

// // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // const juice3 = `Juice with 3 apples and 2 oranges.`;

// // // const juice1 = fruitProcessor(5, 0);
// // // const juice2 = fruitProcessor(2, 4);
// // // const juice3 = fruitProcessor(3, 2);

// // ////////////////////////////////////
// // // Function Expressions
// // const calcAge = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // const age1 = calcAge(1991);
// // console.log(age1);

// // function calcAge(birthYear, currentYear) {
// //   // Parameters
// //   const age = currentYear - birthYear;
// //   return age;
// // }

// // const myAge = calcAge(1991, 2037); // Arguments
// // const herAge = calcAge(2005, 2037);

// // console.log(`I am ${myAge} years old`);
// // console.log(`She is ${herAge} years old`);

// // function introduce(firstName, lastName, age) {
// //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// //   return introduction;
// // }

// // console.log(introduce("Jonas", "Schmedtmann", 46)); // All good
// // console.log(introduce("Sarah")); // Missing parameters become undefined

// // ////////////////////////////////////
// // // Return Values and Scope

// // function calcAge(birthYear) {
// //   return 2037 - birthYear;
// // }

// // function yearsUntilRetirement(birthYear, firstName) {
// //   const age = calcAge(birthYear); // Using one function inside another!
// //   const retirement = 65 - age;

// //   if (retirement > 0) {
// //     return `${firstName} retires in ${retirement} years`;
// //   } else {
// //     return `${firstName} has already retired!`;
// //   }
// // }

// // console.log(yearsUntilRetirement(1991, "Jonas"));
// // console.log(yearsUntilRetirement(1950, "Mike"));

// // // Global scope
// // const globalVar = "I am global";

// // function testScope() {
// //   // Function scope
// //   const localVar = "I am local";
// //   console.log(globalVar); // Can access global
// //   console.log(localVar); // Can access local
// // }

// // testScope();
// // // console.log(localVar); // Error! Can't access local from outside
// // console.log(globalVar); // Works fine

// // const userName = "Jonas"; // Global

// // function createWelcomeMessage(user) {
// //   const message = `Welcome back, ${user}!`; // Local to function
// //   const timestamp = new Date().toLocaleTimeString(); // Local to function

// //   return `${message} Current time: ${timestamp}`;
// // }

// // console.log(createWelcomeMessage(userName));
// // // console.log(message); // Error - message is local to function

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;
// // ... 27 more variables?

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// ////////////////////////////////////
// // Arrays - Creation and Access
// console.log("=== ARRAYS ===");

// // Array creation
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// // Different data types in same array
// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// // Alternative way (but literal notation is preferred)
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// // Array indexing starts at 0
// console.log(friends[0]); // Michael (first element)
// console.log(friends[1]); // Steven (second element)
// console.log(friends[2]); // Peter (third element)

// // Array length property
// console.log(friends.length); // 3

// // Get the last element
// console.log(friends[friends.length - 1]); // Peter

// // Changing array elements
// friends[1] = "Jay";
// console.log(friends); // ['Michael', 'Jay', 'Peter']

// // Arrays can contain expressions and function calls
// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991];
// console.log(jonas);

// // Using our calcAge function from Hour 1
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// console.log(ages);

// ////////////////////////////////////
// // Array Methods - Adding Elements

// const friends = ["Michael", "Steven", "Peter"];

// // Push - add to end
// const newLength = friends.push("Jay");
// console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
// console.log(newLength); // 4 (push returns new length)

// // Unshift - add to beginning
// friends.unshift("John");
// console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// // Pop - remove from end
// const popped = friends.pop();
// console.log(popped); // 'Jay' (returns what was removed)
// console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

// // Shift - remove from beginning
// const shifted = friends.shift();
// console.log(shifted); // 'John' (returns what was removed)
// console.log(friends); // ['Michael', 'Steven', 'Peter']

// // IndexOf - find position of element
// console.log(friends.indexOf("Steven")); // 1
// console.log(friends.indexOf("Bob")); // -1 (not found)

// // Includes - check if element exists
// console.log(friends.includes("Steven")); // true
// console.log(friends.includes("Bob")); // false

// ////////////////////////////////////
// // Array Iteration - Loops

// const friends = ["Michael", "Steven", "Peter"];

// // Traditional for loop
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// // For loop with processing
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // forEach method - modern approach
// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// // Arrow function version (even cleaner)
// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// // Real-world example - grade processing
// const grades = [85, 92, 78, 96, 88, 74];
// let total = 0;

// // Calculate average grade
// for (let i = 0; i < grades.length; i++) {
//   total += grades[i];
// }
// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// // Count passing students (grade >= 70)
// let passedCount = 0;
// grades.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades.length} students passed`);