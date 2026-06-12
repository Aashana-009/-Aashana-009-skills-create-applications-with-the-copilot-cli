// Library of calculator functions used by CLI and tests
// Supported operations:
// - add  : addition (a + b)
// - sub  : subtraction (a - b)
// - mul  : multiplication (a * b)
// - div  : division (a / b) -- throws on division by zero

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

module.exports = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => { if (b === 0) throw new Error(); return a / b; },
  mod: (a, b) => a % b,
  pow: (a, b) => a ** b,
  sqrt: (a) => Math.sqrt(a)
};