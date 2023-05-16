let a = 5; // init new value 5
let b = a; // make a copy of a into b (5) (copy by value: ONLY APPLY TO PRIMITIVE VALUES*** when they get copied)
let c = 5; // init new value 5

// console.log("a === c", a === c); // 5 === 5 => true
// console.log("a === b", a === b); // 5 === 5 => true
// console.log("b === c", b === c); // 5 === 5  => true

// a = 10; // reassign a to 10
// console.log("a === c", a === c); // 10 === 5 => false
// console.log("a === b", a === b); // 10 === 5 => false (compare by value: ONLY APPLY TO PRIMITIVE VALUES)
// console.log("b === c", b === c); // 5 === 5 => true

// ====================== ARRAYS ======================
// const arrA = [999, "name", 777, true, [[]], false, {}, undefined, null]; // data structure to store a list of items (ordering is important in an array)
// arrA.push(999);
// console.log(arrA[arrA.length - 1]);
// console.log("arrA before", arrA);
// arrA[0] = 1001;
// console.log("arrA after", arrA);

const arrA = [10]; // '000111'
const arrB = arrA; // '000111' => NOT MAKING A COPY OF arrA - we are referencing arrA (copy by reference)
const arrC = [10]; // 'XXXAAA'
const arrD = [10]; // '777888'

console.log("arrA === arrB", arrA === arrB); // [10] === [10] => true => === comparing objects compare by reference a.k.a. compare by identity (checking their memory address location)
console.log("arrA === arrC", arrA === arrC); // [10] === [10] => false
console.log("arrC === arrD", arrC === arrD); // false

arrA[0] = 100; // Am I reassigning arrA? NO
// arrA.push(9999);
// arrB[1] = 100;
console.log("arrA", arrA); // [10, 100] '000111'
console.log("arrB", arrB); // [10, 100] '000111'
console.log("arrC", arrC); // [10]
console.log("arrA === arrB", arrA === arrB); // '000111' === '000111' => true

// pass by reference (copied by reference) vs pass by value (related to copy by value)
function reassignA(primitive) {
	primitive = 999;
	return primitive;
}

function reassignB(array) {
	array[0] = 999;
	return array;
}

let prim = 5;
let arrEx = [];

let resultA = reassignA(prim);
let resultB = reassignB(arrEx);

console.log(prim); // 999, 5 => 5
console.log(arrEx); // [999], [] => [999]

console.log("result a", resultA);
console.log("result b", resultB);
console.log("resultB === arrEx", resultB === arrEx); // true

// REVIEW
// // copy by value
// let x = 5;
// let y = x;

// // compare by value
// x === y; // true (comparing scalar value)
// x = 10;
// x === y; // false

// // copy by reference
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// // compare by reference
// arr1 === arr2; // true
// arr2.push(1000);
// arr1 === arr2; // true
