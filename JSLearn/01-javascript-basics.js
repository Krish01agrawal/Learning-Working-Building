// ========================================
// NODE.JS FUNDAMENTALS - PHASE 1
// JavaScript Basics for Node.js
// ========================================

console.log("🚀 Starting Node.js Fundamentals Journey!");

// ========================================
// 1. VARIABLES AND DATA TYPES
// ========================================

// var (old way - avoid in modern code)
var oldWay = "I'm old";

// let (modern way - can be changed)
let modernWay = "I can change";
modernWay = "I changed!";

// const (modern way - cannot be changed)
const constantValue = "I cannot change";
// constantValue = "This will cause an error!"; // ❌ Error!

// Data Types
const stringExample = "Hello World";
const numberExample = 42;
const booleanExample = true;
const nullExample = null;
const undefinedExample = undefined;
const objectExample = { name: "John", age: 30 };
const arrayExample = [1, 2, 3, 4, 5]; // array is a collection of values

console.log("=== DATA TYPES ===");
console.log("String:", typeof stringExample);
console.log("Number:", typeof numberExample);
console.log("Boolean:", typeof booleanExample);
console.log("Object:", typeof objectExample);
console.log("Array:", Array.isArray(arrayExample));

// ========================================
// 2. FUNCTIONS
// ========================================

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const greetExpression = function(name) {
    return `Hello, ${name}!`;
};

// Arrow Function (modern way)
const greetArrow = (name) => {
    return `Hello, ${name}!`;
};

// Arrow Function (shorter)
const greetShort = name => `Hello, ${name}!`;

console.log("\n=== FUNCTIONS ===");
console.log(greet("Alice"));
console.log(greetExpression("Bob"));
console.log(greetArrow("Charlie"));
console.log(greetShort("David"));

// ========================================
// 3. ARRAYS AND ARRAY METHODS
// ========================================

const fruits = ["apple", "banana", "orange", "grape"];

console.log("\n=== ARRAY METHODS ===");

// forEach - loop through each item
console.log("forEach:");
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// map - create new array
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("map:", upperFruits);

// filter - create new array with filtered items
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("filter:", longFruits);

// find - find first matching item
const foundFruit = fruits.find(fruit => fruit.startsWith('b'));
console.log("find:", foundFruit);

// reduce - combine all items into one value
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("reduce (sum):", sum);

// ========================================
// 4. OBJECTS AND DESTRUCTURING
// ========================================

const person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    hobbies: ["reading", "coding", "gaming"],
    address: {
        street: "123 Main St",
        zipCode: "10001"
    }
};

console.log("\n=== OBJECTS ===");
console.log("Person:", person);
console.log("Name:", person.name);
console.log("Age:", person.age);

// Destructuring
const { name, age, city } = person;
console.log("Destructured:", { name, age, city });

// Destructuring with renaming
const { name: personName } = person;
console.log("Renamed:", personName);

// ========================================
// 5. TEMPLATE LITERALS
// ========================================

const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log("\n=== TEMPLATE LITERALS ===");
console.log("Full name:", fullName);

// Multi-line strings
const multiLine = `
    This is a
    multi-line
    string!
`;
console.log("Multi-line:", multiLine);

// ========================================
// 6. CONDITIONAL STATEMENTS
// ========================================

const userAge = 25;

console.log("\n=== CONDITIONALS ===");

if (userAge >= 18) {
    console.log("You are an adult");
} else if (userAge >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}

// Ternary operator
const status = userAge >= 18 ? "adult" : "minor";
console.log("Status:", status);

// ========================================
// 7. LOOPS
// ========================================

console.log("\n=== LOOPS ===");

// for loop
console.log("for loop:");
for (let i = 0; i < 3; i++) {
    console.log(`Count: ${i}`);
}

// for...of loop (for arrays)
console.log("for...of loop:");
for (const fruit of fruits) {
    console.log(fruit);
}

// for...in loop (for objects)
console.log("for...in loop:");
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// ========================================
// 8. ERROR HANDLING
// ========================================

console.log("\n=== ERROR HANDLING ===");

try {
    // This will cause an error
    const result = nonExistentFunction();
} catch (error) {
    console.log("Caught error:", error.message);
} finally {
    console.log("This always runs");
}

// ========================================
// 9. ASYNC/AWAIT BASICS
// ========================================

console.log("\n=== ASYNC/AWAIT ===");

// Simulating async operation
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Async function
async function asyncExample() {
    console.log("Starting async operation...");
    await delay(1000); // Wait 1 second
    console.log("Async operation completed!");
    return "Success!";
}

// Call async function
asyncExample().then(result => {
    console.log("Result:", result);
});

console.log("This runs immediately (not waiting for async)");

// ========================================
// 10. MODULES (Node.js specific)
// ========================================

console.log("\n=== MODULES ===");

// We'll create a separate module file
const mathModule = require('./starterPack/math');

console.log("Math module add function:", mathModule.add(5, 3));

// ========================================
// PRACTICE EXERCISES
// ========================================

console.log("\n=== PRACTICE EXERCISES ===");

// Exercise 1: Create a function that reverses a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reverse 'hello':", reverseString('hello'));

// Exercise 2: Find the longest word in an array
function findLongestWord(words) {
    return words.reduce((longest, current) => 
        current.length > longest.length ? current : longest
    );
}
console.log("Longest word:", findLongestWord(['cat', 'dog', 'elephant', 'bird']));

// Exercise 3: Check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Is 17 prime?", isPrime(17));
console.log("Is 24 prime?", isPrime(24));

console.log("\n🎉 JavaScript Basics Complete! Ready for Node.js specific concepts!"); 