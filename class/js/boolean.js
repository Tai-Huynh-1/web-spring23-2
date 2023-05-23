// && (and)
// || (or)

console.log("true && true", true && true); // true
console.log("true && false", true && false); // false
console.log("false && true", false && true); // false
console.log("false && false", false && false); // false

console.log("true || true", true || true); // true
console.log("true || false", true || false); // true
console.log("false || true", false || true); // true
console.log("false || false", false || false); // false

// short circuiting
console.log("0 < 10 || 11 < 10", 0 < 10 || 11 < 10); // eval left side, if true - ends and does not compute right side
