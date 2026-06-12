#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - add  : addition (a + b)
// - sub  : subtraction (a - b)
// - mul  : multiplication (a * b)
// - div  : division (a / b)

const { add, sub, mul, div } = require('./lib/calculator');

function printUsage() {
  console.error('Usage: node src/calculator.js <op> <a> <b>');
  console.error('Where <op> is one of: add, sub, mul, div');
  console.error('Examples:');
  console.error('  node src/calculator.js add 2 3    # -> 5');
  console.error('  node src/calculator.js div 10 2   # -> 5');
}

function exitWithError(message, code = 1) {
  console.error(message);
  process.exit(code);
}

const argv = process.argv.slice(2);
if (argv.length !== 3) {
  printUsage();
  process.exit(1);
}

const [op, aStr, bStr] = argv;
const a = Number(aStr);
const b = Number(bStr);

if (Number.isNaN(a) || Number.isNaN(b)) {
  exitWithError('Error: both operands must be valid numbers', 1);
}

try {
  switch (op) {
    case 'add':
      console.log(add(a, b));
      process.exit(0);
      break;

    case 'sub':
      console.log(sub(a, b));
      process.exit(0);
      break;

    case 'mul':
      console.log(mul(a, b));
      process.exit(0);
      break;

    case 'div':
      try {
        console.log(div(a, b));
        process.exit(0);
      } catch (err) {
        exitWithError('Error: Division by zero', 2);
      }
      break;

    default:
      printUsage();
      process.exit(1);
  }
} catch (err) {
  exitWithError(err.message || 'Error', 1);
}
