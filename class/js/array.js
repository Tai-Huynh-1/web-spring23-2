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
	array.forEach(function (element, index, originalArray) {
		console.log("element", element);
		console.log("index", index);
		console.log("originalArray", originalArray);
		console.log("=====================");
		if (index === originalArray.length - 2) {
			console.log("if-statement code does work");
			return;
		}
	});
}

loopForEach(arrA);
