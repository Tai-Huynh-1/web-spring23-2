let a = 5; // init new value 5
let b = a; // make a copy of a into b (5) (copy by value: ONLY APPLY TO PRIMITIVE VALUES*** when they get copied)
let c = 5; // init new value 5

console.log("a === c", a === c); // 5 === 5 => true
console.log("a === b", a === b); // 5 === 5 => true
console.log("b === c", b === c); // 5 === 5  => true

a = 10; // reassign a to 10
console.log("a === c", a === c); // 10 === 5 => false
console.log("a === b", a === b); // 10 === 5 => false (compare by value: ONLY APPLY TO PRIMITIVE VALUES)
console.log("b === c", b === c); // 5 === 5 => true

const arrA = [999, "name", 777, true, [[]], false, {}, undefined, null]; // data structure to store a list of items (ordering is important in an array)
// arrA.push(999);
console.log(arrA[2]);
