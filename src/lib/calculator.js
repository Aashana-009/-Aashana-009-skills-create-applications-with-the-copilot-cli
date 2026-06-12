// src/lib/calculator.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
};

// Add these new functions
const modulo = (a, b) => a % b;
const power = (base, exponent) => Math.pow(base, exponent);
const squareRoot = (n) => {
  if (n < 0) throw new Error("Cannot calculate square root of a negative number");
  return Math.sqrt(n);
};

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };