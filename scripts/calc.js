function addition(num1, num2) {
    return num1 + num2;
};


module.exports = addition;          // export function, so that the require statement works in test file.

console.log(addition(3,4));
// console.log(addition("cow", 2));