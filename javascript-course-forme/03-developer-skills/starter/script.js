// // // Remember, we're gonna use strict mode in all scripts now!
// // 'use strict';

// // // Remember, we're gonna use strict mode in all scripts now!
// // "use strict";

// // ////////////////////////////////////
// // // Professional Development Environment Setup

// // console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

// // // Create some messy code - don't worry about formatting yet
// // const messyExample = function (name, age) {
// //   if (age >= 18) {
// //     return "Hello " + name + ", you are an adult";
// //   } else {
// //     return "Hello " + name + ", you are a minor";
// //   }
// // };

// // console.log("Current messy code example:", messyExample("John", 25));
// // console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

// // ////////////////////////////////////
// // // Extension Installation Test

// // function testExtensions() {
// //   const extensionTests = [
// //     { name: "Prettier", status: "installed", purpose: "code formatting" },
// //     { name: "Live Server", status: "installed", purpose: "auto refresh" },
// //     {
// //       name: "Auto Rename Tag",
// //       status: "installed",
// //       purpose: "HTML efficiency",
// //     },
// //   ];

// //   return extensionTests;
// // }

// // const extensionStatus = testExtensions();
// // console.log("Extension installation status:", extensionStatus);

// // ////////////////////////////////////
// // // Prettier Configuration Test

// // // This code has terrible formatting - Prettier will fix it!
// // const prettierTest = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   skills: ["JavaScript", "React", "Node.js"],
// //   isActive: true,
// // };

// // const messyFunction = function (x, y, z) {
// //   if (x > 0 && y > 0) {
// //     return x + y + z;
// //   } else {
// //     return 0;
// //   }
// // };

// // const messyArrow = (items) => {
// //   return items.map((item) => {
// //     return item.toUpperCase();
// //   });
// // };

// // console.log(
// //   "Before Prettier formatting - this code works but looks unprofessional"
// // );

// // // Create this with terrible formatting:
// // const studentTest = {
// //   firstName: "your-name",
// //   skills: ["HTML", "CSS", "JavaScript"],
// //   experience: "beginner",
// //   goals: ["become-developer", "build-projects"],
// // };

// // const testFunc = function (data) {
// //   for (let i = 0; i < data.length; i++) {
// //     console.log(data[i]);
// //   }
// // };

// // // Save the file and watch the magic happen!

// // ////////////////////////////////////
// // // Live Server Testing

// // // Test 1: Basic live reload
// // let liveServerTest = "Initial message - change #1";
// // console.log("Live Server test:", liveServerTest);

// // // Test 2: Time-based updates
// // const timeStamp = new Date().toLocaleTimeString();
// // const updateCount = 1;

// // console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // // Test 3: Function testing
// // function demonstrateLiveReload() {
// //   const randomColor = ["red", "blue", "green", "purple", "orange"][
// //     Math.floor(Math.random() * 5)
// //   ];
// //   const message = `Live Server rocks! Random color: ${randomColor}`;

// //   console.log(message);
// //   return message;
// // }

// // demonstrateLiveReload();

// // // Student Exercise: Add this function and test live reload
// // function showCurrentTime() {
// //   const now = new Date().toLocaleTimeString();
// //   console.log("Current time:", now);
// //   return now;
// // }

// // showCurrentTime();

// // ////////////////////////////////////
// // // Code Snippets Testing

// // // Type 'cl' then press Tab - it should expand to console.log();
// // console.log("Testing snippet functionality - cl + Tab created this!");

// // // Type 'func' then press Tab - it should create a function template
// // function testSnippets() {
// //   console.log("Function created with snippet - func + Tab!");
// //   return "Snippets working perfectly!";
// // }

// // testSnippets();

// // // Type 'arrow' then press Tab - it should create an arrow function template
// // const snippetTest = (message) => {
// //   console.log(`Arrow function from snippet: ${message}`);
// //   return message;
// // };

// // snippetTest("Snippets save so much typing time!");

// ////////////////////////////////////
// // BROWSER DEVELOPER TOOLS MASTERY

// function demonstrateConsoleDebugging(data) {
//   console.group("Debugging Session");

//   console.log("Input data:", data);

//   if (typeof data !== "object") {
//     console.warn("Warning: Expected object, got", typeof data);
//   }

//   console.table(data);
//   console.groupEnd();

//   return Array.isArray(data) ? data.length : Object.keys(data).length;
// }

// // Test console debugging with different data types
// const arrayData = [1, 2, 3, 4, 5];
// const objectData = { name: "John", age: 30, city: "New York" };

// demonstrateConsoleDebugging(arrayData);
// demonstrateConsoleDebugging(objectData);

// ////////////////////////////////////
// // DEBUGGER STATEMENT AND BREAKPOINTS

// function stepThroughDebugging(numbers) {
//   debugger; // This will pause execution in browser dev tools

//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     const currentNumber = numbers[i];

//     console.log(`Processing index ${i}: value = ${currentNumber}`);

//     if (typeof currentNumber === "number") {
//       sum += currentNumber;
//       count++;
//     } else {
//       console.error(`Invalid number at index ${i}:`, currentNumber);
//     }
//   }

//   const average = count > 0 ? sum / count : 0;
//   console.log("Final results:", { sum, count, average });

//   return average;
// }

// // Test debugging function - open dev tools to see debugger in action
// const mixedNumbers = [10, 20, "error", 30, null, 40];
// const debugResult = stepThroughDebugging(mixedNumbers);
// console.log("Debug session result:", debugResult);