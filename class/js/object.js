// objects are key: value pairs (separated by commas)
// in an object, the order of the keys do not matter, key name (property name) is more important

// create an object
const student1 = {
	first: "Anne",
	email: "anne@gmail.com",
	phone: "111-111-1111",
	age: 15,
	isActive: true,
	address: {
		mailingAddress: "123 Main St.",
		shippingAddress: "321 Wall St.",
	},
	enrollments: ["cs101", "math1a", "chem2a"],
	gradYear: null,

	// methods: functions that belong to an object
	getEmail: function () {
		return this.email; // "this" refers to student1
	},

	// different way of devlaring a method, this is ES6, notice I don't need a colon and "function keyword"
	getProperty(key) {
		return this[key];
	},
};

// read properties / values from objects

// console.log(student1.email);
// console.log(student1["email"]);
// console.log(student1.address.mailingAddress);

// update array inside object
student1.enrollments[0] = "bio101";
console.log(student1.enrollments[0]);

// update property
student1.isActive = false;
console.log(student1.isActive);

// delete property
console.log(student1);
delete student1.isActive;
console.log(student1);

// update (adding property / insertion)
student1.isActive = "2 years"; // adding property is same syntax as updating - JS will check if the object has the key to update / reassign, otherwise if not, it will create that property/key as a new property
console.log(student1);

// order

// const array = {
// 	// ... other array properties
// 	length: 0,
// 	forEach: function (callbackfn, originalArray) {
// 		for (let i = 0; i < originalArray.length; i++) {
// 			callbackfn(originalArray[i], i, originalArray);
// 		}
// 	},
// };
