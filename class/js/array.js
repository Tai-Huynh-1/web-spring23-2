// create an array
const arrA = [];

// update an array
// arrA[1] = 999;
const newLength = arrA.push(999, 1000, 1001, 1002);

const popped = arrA.pop();
// console.log("popped", popped);
// console.log(arrA);
// insert / remove from the beginning using Array.unshift() Array.shift()

// reading from an array
// console.log(arrA[0]);

// deleting items from array: use .shift() and .pop()

// const len = arrA.length

// looping over an array: using for-loop
function loop(array) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		console.log(`at index ${i}, the value is ${element}`);

		if (i === array.length - 2) {
			return;
		}
	}

	console.log("next line of code after the for-loop");
}

// loop(arrA);

// looping over an array: using forEach method (method: function that belongs to an object)
function loopForEach(array) {
	const myCallbackFn = function (element, index, originalArray) {
		console.log("index", index);
		console.log("element", element);
		console.log("originalArray", originalArray);
		console.log("=====================");

		if (index === originalArray.length - 2) {
			console.log("if-statement code does work");
			return;
		}
	};

	array.forEach(myCallbackFn);
}

Array.prototype.customForEach = function (callbackfn) {
	const originalArray = this;

	for (let i = 0; i < originalArray.length; i++) {
		const element = originalArray[i];
		callbackfn(element, i, originalArray);
	}
};

// 1. run this code first
Array.prototype.customReduce = function (callbackfn, initialValue) {
	// "this" is how you get access to the original array inside of your customReduce method, I have renamed the reference to "originalArray" for you to use
	const originalArray = this;

	// 2. fill in the logic in here to make your "customReduce" method work the same way as the Array.reduce method
	// hint: you might set up a for-loop here to perform some task like invoking the callback function
	// remember the functionality should work like the original "reduce" method
	// write your code below:
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 3. Test out your custom reduce method by summing up the numbers in the numbers array
const sumFromCustomReduce = numbers.customReduce(function () {}, 0);
console.log(sumFromCustomReduce);

function loopCustomForEach(array) {
	const myCallbackFn = function (element, index, originalArray) {
		console.log("index", index);
		console.log("element", element);
		console.log("originalArray", originalArray);
		console.log("========= CUSTOM FOREACH CALLBACK ============");

		if (index === originalArray.length - 2) {
			console.log("if-statement code does work");
			return;
		}
	};

	array.customForEach(myCallbackFn);
}

// loopForEach(arrA);
console.log("***********************************************");
loopCustomForEach(arrA);

// Array.map() - loops over array, returns a new array, the array preserves the length of the original array
const arrB = [10, 2, 3, 4, 12, 5, 6, 7, 9, 1];

const returnedArray = arrB.map(function (element) {
	return element * 100;
});
// console.log(returnedArray);
// console.log("returnedArray === arrB", returnedArray === arrB);

// Array.reduce() - loops over an array, returns an accumulated value, it MAY NOT preserve the length of the original array

const sum = arrB.reduce(function (accumulated, element) {
	return accumulated + element;
}, 0);
console.log("sum", sum);

const times100 = arrB.reduce(function (accumlated, element) {
	accumlated.push(element * 100);
	return accumlated;
}, []);

console.log("times100", times100);
console.log("times100 === arrB", times100 === arrB);

// Loops & Nested loops & problem 4
function whileLoop(array) {
	let i = 0;
	while (i < array.length) {
		const element = array[i];
		console.log(element);
	}
}

// const arrB = [10, 2, 3, 4, 12, 5, 6, 7, 9, 1];
function doubleLoop(array, target) {
	let counter = 1;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			console.log(`counter: ${counter} - i: ${i} - j: ${j}`);
			counter++;
			const num1 = array[i];
			const num2 = array[j];
			const sum = num1 + num2;
			if (sum === target) {
				return [i, j];
			}
		}
	}
	return [-1, -1];
}

console.log("sum", doubleLoop(arrB, 2));
// HOW MANY TOTAL ITERATION TO FIND THE ANSWER ABOVE. [9, 9] => 100 iterations with 2x for-loop

// time complexity for input size n = 10
// time = O(n^2)
// n = 10 => O(n^2) => 10*10 => 100 ms
// n = 100 (10x) => O(n^2) => 100*100 => 10,000 ms (100x)
// n = 1000 (10x) => O(n^2) => 1000*1000 => 1,000,000 ms (100x)

// time = O(n)
// n = 10 => 10 ms
// n = 1000 => 1000 ms

// go through SUM problem and reduce to O(n)

// copying arrays (deep & shallow)
