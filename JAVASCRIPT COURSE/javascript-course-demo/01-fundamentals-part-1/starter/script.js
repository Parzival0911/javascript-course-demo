// // // // // // JavaScript Fundamentals - Part 1
// // // // // // We'll write our code here!

// // // // // let js = "amazing";
// // // // // console.log(40 + 8 + 23 - 10);
// // // // // console.log(js);


// // // // // console.log("=== VARIABLES ===");

// // // // // let firstName = "Jonas";
// // // // // console.log(firstName);

// // // // // let age = 30;
// // // // // age = 31; 
// // // // // console.log(age);
// // // // // age = 50;
// // // // // console.log(age);

// // // // // const birthYear = 1991;
// // // // // console.log(birthYear);

// // // // // const PI = 3.1415;
// // // // // console.log(PI);

// // // // // var job = "programmer";
// // // // // job = "teacher";
// // // // // console.log(job);

// // // // // const country = "Portugal";
// // // // // const language = "Portuguese";
// // // // // const population = 10;

// // // // // age = 25;
// // // // // age = 26; //this will change

// // // // // // let firstName;
// // // // // // let myCurrentJob;
// // // // // // const PI 

// // // // // console.log("=== DATA TYPES ===");

// // // // // //number
// // // // // let id = 12345;
// // // // // console.log(id);
// // // // // console.log(typeof id);

// // // // // //string
// // // // // let lastName = "Jonas";
// // // // // console.log(lastName);
// // // // // console.log(typeof lastName);

// // // // // //boolean
// // // // // let JavaScriptIsFun = true;
// // // // // console.log(JavaScriptIsFun);
// // // // // console.log(typeof javascriptIsFun);

// // // // // let year;
// // // // // console.log(year);
// // // // // console.log(typeof year);

// // // // // let dynamicVariable = 23;
// // // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // // dynamicVariable = "Now I'm a string!";
// // // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // // dynamicVariable = true;
// // // // // console.log(dynamicVariable, typeof dynamicVariable);


// // // // ////////////////////////////////////
// // // // // Basic Operators - Math operators
// // // // console.log("=== MATH OPERATORS ===");

// // // // const now = 2037;
// // // // const ageJonas = now - 1991;
// // // // const ageSarah = now - 2018;
// // // // console.log(ageJonas, ageSarah);

// // // // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // // // console.log("Math operations:");
// // // // console.log("Addition:", 10 + 5);
// // // // console.log("Subtraction:", 20 - 8);
// // // // console.log("Multiplication:", 4 * 7);
// // // // console.log("Division:", 15 / 3);
// // // // console.log("Exponentiation:", 2 ** 3);

// // // // // Math with strings!
// // // // const firstName = "Jonas";
// // // // const lastName = "Schmedtmann";
// // // // console.log(firstName + " " + lastName);
// // // // console.log("Hello " + "World" + "!");
// // // // console.log("I am " + 25 + " years old");

// // // // // Assignment operators
// // // // console.log("=== ASSIGNMENT OPERATORS ===");

// // // // let x = 10 + 5; // 15
// // // // console.log("x starts as:", x);

// // // // x += 10;
// // // // console.log("After x += 10:", x);

// // // // x *= 4;
// // // // console.log("After x *= 4:", x);

// // // // x /= 2;
// // // // console.log("After x /= 2:", x);

// // // // x++;
// // // // console.log("After x++:", x);

// // // // x--;
// // // // x--;
// // // // console.log("After x-- twice:", x);

// // // // ////////////////////////////////////
// // // // // Comparison operators
// // // // console.log("=== COMPARISON OPERATORS ===");

// // // // console.log("Age comparison:");
// // // // console.log(ageJonas > ageSarah);
// // // // console.log(ageSarah >= 18);
// // // // console.log(ageJonas < 30);

// // // // console.log("Number comparisons:");
// // // // console.log(25 > 20);
// // // // console.log(15 < 10);
// // // // console.log(18 >= 18);
// // // // console.log(16 <= 15);

// // // // const isFullAge = ageSarah >= 18;
// // // // console.log("Sarah is adult:", isFullAge);

// // // // const isJonasOlder = ageJonas > ageSarah;
// // // // console.log("Jonas is older:", isJonasOlder);

// // // // console.log("Complex comparison:");
// // // // console.log(now - 1991 > now - 2018);

// // // // let z, y;
// // // // z = y = 25 - 10 - 5;
// // // // console.log(z, y);

// // // // const averageAge = (ageJonas + ageSarah) /2;
// // // // console.log (ageJonas, ageSarah, averageAge)


// // // // // Operator Precedence
// // // // console.log("=== OPERATOR PRECEDENCE ===");


// // // // // Coding Challenge #1 - BMI Calculator

// // // // // Test Data 1
// // // // const massMark = 78;
// // // // const heightMark = 1.69;
// // // // const massJohn = 92;
// // // // const heightJohn = 1.95;


// // // // const BMIMark = massMark / heightMark ** 2;
// // // // const BMIJohn = massJohn / (heightJohn * heightJohn)

// // // // const markHigherBMI = BMIMark > BMIJohn;

// // // // console.log(BMIMark);
// // // // console.log(BMIJohn);
// // // // console.log(markHigherBMI);

// // // // Strings and Template Literals
// // // const firstName = "Jonas";
// // // const job = "teacher";
// // // const birthYear = 1991;
// // // const year = 2037;

// // // const jonas =
// // //   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// // // console.log(jonas);

// // // // The modern way - ES6 Template Literals
// // // const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // // console.log(jonasNew);

// // // // Any expression works inside ${}
// // // console.log(`I'm ${2037 - 1991} years old`);
// // // console.log(`Math works: ${2 + 3} equals five`);
// // // console.log(`Comparisons too: ${5 > 3}`); // true

// // // // You can use backticks for any string
// // // console.log(`Just a regular string...`);

// // // // Old way - painful
// // // console.log(
// // //   "String with \n\
// // // multiple \n\
// // // lines"
// // // );

// // // // New way - natural
// // // console.log(`String
// // // multiple
// // // lines`);

// // // // Taking Decisions: if / else Statements
// // // const age = 15;

// // // if (age >= 18) {
// // //   console.log("Sarah can start driving license 🚗");
// // // } else {
// // //   const yearsLeft = 18 - age;
// // //   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// // // }

// // // //const birthYear = 2012;

// // // let century;
// // // if (birthYear <= 2000) {
// // //   century = 20;
// // // } else {
// // //   century = 21;
// // // }
// // // console.log(century);

// // // const score = 85;

// // // if (score >= 60) {
// // //   console.log(`You passed with ${score} points! 🎉`);
// // //   console.log("Congratulations!");
// // // } else {
// // //   const pointsNeeded = 60 - score;
// // //   console.log(`You failed. Need ${pointsNeeded} more points.`);
// // // }

// // // // Truthy and Falsy Values

// // // // 5 falsy values: 0, '', undefined, null, NaN
// // // console.log(Boolean(0));
// // // console.log(Boolean(undefined));
// // // console.log(Boolean("Jonas"));
// // // console.log(Boolean({}));
// // // console.log(Boolean(""));

// // // const money = 100;
// // // if (money) {
// // //   console.log("Don't spend it all ;)");
// // // } else {
// // //   console.log("You should get a job!");
// // // }

// // // let height = 0;
// // // if (height) {
// // //   console.log("YAY! Height is defined");
// // // } else {
// // //   console.log("Height is UNDEFINED");
// // // }

// // // // Better approach for checking if defined:
// // // if (height !== undefined) {
// // //   console.log("Height is defined");
// // // }

// // // // Coding Challenge #2

// // // // Reuse your BMI calculation from Challenge #1
// // // const massMark = 78;
// // // const heightMark = 1.69;
// // // const massJohn = 120;
// // // const heightJohn = 1.95;

// // // const BMIMark = massMark / heightMark ** 2;
// // // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // // console.log(BMIMark, BMIJohn);

// // // if (BMIMark > BMIJohn) {
// // //     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
// // // } else {
// // //     console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})`);
// // // }


// // // Type Conversion and Coercion

// // // type conversion (manual)
// // const inputYear = "1991";
// // console.log(Number(inputYear), inputYear);
// // console.log(Number(inputYear) + 18);

// // console.log(Number("Jonas"));
// // console.log(typeof NaN);

// // console.log(String(23), 23);
// // console.log(typeof String(23));

// // // type coercion (automatic)
// // console.log("I am " + 23 + " years old");
// // console.log("23" - "10" - 3); //(strings become numbers)
// // console.log("23" / "2"); //(division converts to numbers)
// // console.log("23" * "2"); //(multiplication converts to numbers)

// // // Can you guess what these will output?
// // let n = "1" + 1; // What do you think?
// // n = n - 1; // What about now?
// // console.log(n);

// // console.log(2 + 3 + 4 + "5"); // Try to guess!
// // console.log("10" - "4" - "3" - 2 + "5"); // This one's tricky!


// // // Equality Operators: == vs. ===

// // const age = "18";
// // if (age === 18) console.log("You just became an adult :D (strict)");
// // if (age == 18) console.log("You just became an adult :D (loose)");

// // // Let's see what happens:
// // console.log("18" === 18); // false - different types
// // console.log("18" == 18); // true - coercion happens
// // console.log(18 === 18); // true - same type and value

// // // Why == can be dangerous
// // console.log("0" == 0); //(string converted)
// // console.log(0 == false); //(boolean converted)
// // console.log("0" == false); //(both converted!)
// // console.log(null == undefined); //(special case)

// // // Weird cases that cause bugs
// // console.log("" == 0);
// // console.log("   " == 0); //(spaces trimmed!)

// // // // Convert explicitly, then compare strictly
// // // const favourite = Number(prompt("What's your favourite number?"));
// // // console.log(favourite);
// // // console.log(typeof favourite);

// // // if (favourite === 23) {
// // //   console.log("Cool! 23 is an amazing number!");
// // // } else if (favourite === 7) {
// // //   console.log("7 is also a cool number");
// // // } else if (favourite === 9) {
// // //   console.log("9 is also a cool number");
// // // } else {
// // //   console.log("Number is not 23 or 7 or 9");
// // // }

// // // // Not-equal operator
// // // if (favourite !== 23) console.log("Why not 23?");

// // // Logical Operators

// // const hasDriversLicense = true; // A
// // const hasGoodVision = true; // B

// // console.log(hasDriversLicense && hasGoodVision);
// // console.log(hasDriversLicense || hasGoodVision);
// // console.log(!hasDriversLicense);

// // const isTired = false; // C
// // console.log(hasDriversLicense && hasGoodVision && !isTired);

// // if (hasDriversLicense && hasGoodVision && !isTired) {
// //   console.log("Sarah is able to drive!");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// // // More complex scenarios
// // const age = 20;
// // const hasPermission = true;
// // const hasExperience = false;

// // // Can drive if: (age >= 18 OR has permission) AND has experience
// // if ((age >= 18 || hasPermission) && hasExperience) {
// //   console.log("Approved to drive");
// // } else {
// //   console.log("Not approved to drive");
// // }


// // The Conditional (Ternary) Operator

// const age = 23;

// // Basic ternary: condition ? valueIfTrue : valueIfFalse
// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// // Equivalent if/else (more verbose)
// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(drink2);

// // Perfect for template literals!
// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);