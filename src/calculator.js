#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - add  : addition (a + b)
// - sub  : subtraction (a - b)
// - mul  : multiplication (a * b)
// - div  : division (a / b)
// - mod  : modulo (a % b)
// - pow  : power (a ** b)
// - sqrt : square root (Math.sqrt(a))

const { add, sub, mul, div, mod, pow, sqrt } = require('./lib/calculator');

function printUsage() {
  console.error('Usage: node src/calculator.js <op> <a> <b>');
  console.error('Where <op> is one of: add, sub, mul, div, mod, pow, sqrt');
}

// ... (keep your existing exitWithError and argument parsing logic)
const argv = process.argv.slice(2);
const [op, aStr, bStr] = argv;
const a = Number(aStr);
const b = Number(bStr);

// Check if operator exists
if (!op) {
  printUsage();
  process.exit(1);
}

// Logic to handle different argument counts
if (op === 'sqrt') {
  if (Number.isNaN(a)) exitWithError('Error: operand must be a valid number', 1);
} else {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    exitWithError('Error: both operands must be valid numbers', 1);
  }
}

try {
  switch (op) {
    case 'add': console.log(add(a, b)); break;
    case 'sub': console.log(sub(a, b)); break;
    case 'mul': console.log(mul(a, b)); break;
    case 'div': console.log(div(a, b)); break;
    case 'mod': console.log(mod(a, b)); break;
    case 'pow': console.log(pow(a, b)); break;
    case 'sqrt': console.log(sqrt(a)); break; // Only uses 'a'
    default:
      printUsage();
      process.exit(1);
  }
} catch (err) {
  exitWithError(err.message || 'Error', 1);
}