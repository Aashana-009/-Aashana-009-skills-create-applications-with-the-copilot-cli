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

const [op, aStr, bStr] = argv;
const a = Number(aStr);
const b = Number(bStr);

// ... (keep your existing NaN check)

try {
  switch (op) {
    case 'add': console.log(add(a, b)); break;
    case 'sub': console.log(sub(a, b)); break;
    case 'mul': console.log(mul(a, b)); break;
    case 'div': console.log(div(a, b)); break;
    
    // New operations
    case 'mod': console.log(mod(a, b)); break;
    case 'pow': console.log(pow(a, b)); break;
    case 'sqrt': console.log(sqrt(a)); break;

    default:
      printUsage();
      process.exit(1);
  }
} catch (err) {
  exitWithError(err.message || 'Error', 1);
}