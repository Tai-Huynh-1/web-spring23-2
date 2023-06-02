function greet(salutation) {
	console.log(salutation);
}

// scoping
var studentA = "jack"; // global scope

// block scope
// if (false) {
// 	const studentA = "mary";
// 	console.log("inside if", studentA);
// } else {
// 	var studentA = "daisy";
// 	console.log("inside else", studentA); // daisy
// }

// function scope (var DOES NOT have/honor block scope, but it DOES have/honor function scope)
function printStudent() {
	var studentA = "sam";
	console.log("function scope", studentA);
}

// console.log("global", studentA); // daisy

// printStudent(); // sam

// console.log("global", studentA); // daisy

// callstacks ===============
// queue => first in first out
// stack => last in first out
// console.log("program begins");
// console.log(studentA);
// printStudent();
// console.log("program ends");

// parallel & multi-thread => 2+ things to be processed/computed at the same time

// concurrency != parallel => 1 thread => synchronously handling requests

// callbacks

// different ways of declaring functions
function funcA() {}

// normal anonymous function
const myAnonymousFunc = function () {};

// arrow functions (implied return keyword if written in the same line WITHOUT a function body {})
const myArrowFunc = (a, b) => a + b;

console.log(myArrowFunc(5, 7));

[1, 2, 3].forEach((num, index, originalArray) => {
	console.log(`number: ${num} - index: ${index}`);
	console.log("originalArray", originalArray);
});
