// Immediately Invoked Function Expressions (IIFE)
// (function (a, b) {
// 	console.log(`a + b is ${a + b}`);
// })(5, 10);

// Default Parameters for functions
function multiply(a = 1, b = 1) {
	return a * b;
}

// console.log(multiply());

// Rest parameters for passing in an unspecified amount of arguments
// Your function pages the arguments into an "args" array
function add(...args) {
	// console.log(args);
	return args.reduce((acc, curr) => acc + curr, 0);
}

// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));

// Spread operator (shallow copy)
const arrA = [100, 800];
const arrB = [1, 2, [44, 55]];
// const arrC = [...arrA, arrB]; //
// const arrC = [...arrA, ...arrB]; //
// console.log(arrC);

const obj1 = {
	firstName: "jack",
	lastName: "sparrow",
};
const obj2 = { ...obj1 };
// console.log(obj2);

const user = {
	firstName: "Jack",
	lastName: "Sparrow",
	address: {
		mailingAddress: "123 Wall St.",
		shippingAddress: "321 Main St.",
	},
	courses: ["cs101", "math8"],
};

const user2 = {
	...user,
};

// console.log("user", user);
// console.log("user2", user2);
// console.log("user === user2", user === user2);
// console.log("user.address === user2.address", user.address === user2.address);

// array & object destructuring
const firstName = "Anne";
const mailingAddress = "jackson ave";
const {
	address: { mailingAddress: mailing_address, shippingAddress }, // 2nd level object destructuring
	lastName,
	firstName: first_name,
	courses: [cs101, math8], // 2nd level array destructuring
} = user; // 1st level object destructuring
// console.log(cs101);

const groceries = ["banana", "milk", "grapes", { mailingAddress: "123 Wall St.", shippingAddress: "321 Main St." }];
const [, , grapes, address] = groceries; // 1st level array destructuring
const { mailingAddress: mailingAddress2 } = address;
// console.log(mailingAddress2);

// looping over objects
// for (const key in user) {
// 	console.log(key);
// }

// useful object method to know
const userKeys = Object.keys(user);
const userValues = Object.values(user);
const userEntries = Object.entries(user);
// console.log(userEntries);

// closure: is created when a function is created, the closure guarentees that the function will always have access to the variable in its lexical scope at the time of  the function's creation
// function outer(a) {
// 	return function (b) {
// 		return a + b;
// 	};
// }
// const inner = outer(5); // what happens?
// console.log(inner(6));

// higher-ordered function (HOF): functions that take in a function as a parameter AND/OR returns a function

// arrow function
const outer = (a) => (b) => a + b;
const inner = outer(5);
// console.log(inner(7));

// pure functions: functions should not mutate its given input, the function should only work with resource (data) given to it through its parameters
const original = [1, 2, 3, 4];
function impureFuncPlus2(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] = array[i] + 2;
	}
	return array;
}

function pureFuncPlus2(array) {
	return array.map((num) => num + 2);
}

const plus2 = pureFuncPlus2(original);
console.log("plus2", plus2);
console.log("original", original);

// promises
