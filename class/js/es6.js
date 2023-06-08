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

// console.log(add(1, 2, 3, 4, 5, 6));

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
};

const user2 = {
	...user,
};

console.log("user", user);
console.log("user2", user2);
console.log("user === user2", user === user2);
console.log("user.address === user2.address", user.address === user2.address);
