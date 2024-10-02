const add = function (a, b) {
  return a + b
}

const subtract = function (a, b) {
  return a - b
}

const sum = function (array) {
  return array.reduce((total, currSum) => total + currSum, 0)
}

const multiply = function (array) {
  return array.reduce((a, b) => a * b)
}

const power = function (a, b) {
  return a ** b
}

const factorial = function (a) {
  let total = 1
  for (let i = 1; i <= a; i++) {
    total = i * total
  }
  return total
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
