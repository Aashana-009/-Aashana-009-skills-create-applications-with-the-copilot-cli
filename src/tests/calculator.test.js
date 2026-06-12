// src/tests/calculator.test.js
const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../lib/calculator');

describe('Calculator Extended Operations', () => {
  test('modulo: 10 % 3 should be 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('power: 2^3 should be 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('squareRoot: sqrt of 16 should be 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot: should throw error for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow("Cannot calculate square root of a negative number");
  });
});