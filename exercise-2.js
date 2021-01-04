console.log(' ')
console.log('EXERCISE 2');
console.log(' ')

// You can execute this code as many times as you want
function* createSquaredNumberGenerator(max) {
  let n = 0
  const condition = max ? n < max : true;

  // Infinite loop each time you call next() function without incrementing "n"
  while (condition) {
    n++;
    yield n * n
  }
}

const squaredNumbers = createSquaredNumberGenerator()
console.log(squaredNumbers.next().value)
console.log(squaredNumbers.next().value)
console.log(squaredNumbers.next().value)
console.log(squaredNumbers.next().value)
console.log(squaredNumbers.next().value)

console.log('----------------------------');