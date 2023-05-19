// Write a function that takes in an age (number). Check if the age is greater than or equal to 65 or not. If it is  equal to or greater than 65 return the string “Special discount” otherwise return “Not Allowed”.

function checkAge(age) {
	if (age >= 65) return "Special discount";
	else return "Not Allowed";
}

// Write a function that takes in an array of numbers and use the forEach() or map() to multiply every number by 100. The function should return a new array with the result. The original array should not be mutated.

function multiply100(array) {
	// for-loops / forEach way
	// const result = [];
	// array.forEach(function (element) {
	// 	result.push(element * 100);
	// });
	// return result;

	// map
	return array.map(function (element) {
		return element * 100;
	});
}

// Write a function that takes in an array of numbers and use the forEach() or map() to multiply every number by 100 if the array provided to the function has a length greater than 5. The function should return a new array with the result. The original array should not be mutated.

function multiply100V2(array) {
	const length = array.length;
	if (length > 5) {
		return array.map(function (element) {
			return element * 100;
		});
	} else return array;
}

// Write a function that takes in an array of numbers and uses the forEach() or map() to multiply every number by 100 only if the number is even - if the number is odd then it will return the original number . The function should return a new array with the result. The original array should not be mutated.

function multiply100V3(array) {
	return array.map(function (element) {
		if (element % 2 === 0) return element * 100;
		else return element;
	});
}
const number = [1, 2, 3, 4];
const res = multiply100V3(number);

// console.log(number === res); // false

// Write a function that takes in this array as input [154, 657, 564, 561, 154, 678, 100, 154] and returns the number of times 154 occurred or existed in that array.

function count(array, target) {
	// let count = 0;
	// for (let i = 0; i < array.length; i++) {
	// 	if (array[i] === target) count++;
	// }
	// return count;

	const cb = function (count, currentValue) {
		if (currentValue === target) count++;
		return count;
	};

	return array.reduce(cb, 0);
}

console.log(count([154, 657, 564, 561, 154, 678, 100, 154], 154));

// Write a function that takes in an argument function checkType(input) - if the input is an array or javascript object then it returns the string “object” - otherwise it will return the string “It’s something else”.

function checkType(input) {
	const t = typeof input;
	if (t === "object") return "object";
	else return "It's something else";
}

// console.log("{}", checkType({}));
// console.log("false", checkType(false));
// console.log("string", checkType("string"));
// console.log("undefined", checkType(undefined));
// console.log("[]", checkType([]));
// console.log("null", checkType(null));
// console.log(Array.isArray(true));
