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

Array.prototype.customForEach = function (callbackfn, originalArray) {
	for (let i = 0; i < originalArray.length; i++) {
		const element = originalArray[i];
		callbackfn(element, i, originalArray);
	}
};

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

	array.customForEach(myCallbackFn, array);
}

// loopForEach(arrA);
console.log("***********************************************");
// loopCustomForEach(arrA);

// Array.map() - loops over array, returns a new array, the array preserves the length of the original array
const arrB = [1, 2, 3, 4, 5, 6, 7, 9, 10];

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
