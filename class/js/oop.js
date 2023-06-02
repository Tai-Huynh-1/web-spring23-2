const cat = {
	name: "Tom",

	// method (services/functions)
	// greet METHOD (function that belongs to an objhect) written with function name as a "key"
	greet: function () {
		console.log("meow");
	},

	// es6 method notation (no colon and no "function" keyword is used)
	// "this" refers to the object instance itself (in case it refers to our object "cat")
	// this.name => cat.name
	getName(p1, p2) {
		console.log("p1: ", p1);
		console.log("p2: ", p2);
		// console.log("this in normal function", this);
		return this.name;
	},

	// arrow function as a method - avoid using array functions for writing methods due to improper "this" binding
	getNameArrow: () => {
		console.log("this in arrow function", this);
		return this.name;
	},
};

const dog = {
	name: "Ruff",
};

const bird = {
	name: "Robin",
};

// this.name = "dave";
// console.log("normal function", cat.getName());
// console.log("arrow function", cat.getNameArrow());

// manually bind the "this" keyword to objects
// const getNameFromDog = cat.getName.bind(dog);
// console.log(getNameFromDog());

// console.log(cat.getName.call(dog, "arg1", "arg2"));
// cat.getName.apply(null, ["arg3, arg4"]);
cat.getName.apply(null, ["arg3", "arg4"]);

// bind does not work with arrow functions
// const getNameFromDogArrow = cat.getNameArrow.bind(dog);
// console.log(getNameFromDogArrow());

// const array = {
// 	length: 0,
// 	push: function () {},
// 	forEach: function () {},
// };

// custom forEach method
// Array.prototype.customForEach = function (callbackfn) {
// 	const originalArray = this;

// 	for (let i = 0; i < originalArray.length; i++) {
// 		const element = this[i];
// 		callbackfn(element, i, this);
// 	}
// };

// const arrA = [1, 2, 3]
// arrA.customForEach(function(num, idx, arr) {
//     console.log(num)
// })
// const z = [{}];
// const c = globalThis.structuredClone(z);
// console.log(z[0] === c[0]);

// const cow = {
// 	getName(p1, p2) {
// 		console.log(p1);
// 		console.log(p2);
// 	},
// };

// cow.getName.apply(null, ["arg9", "arg10"]);
