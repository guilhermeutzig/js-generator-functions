console.log(' ')
console.log('EXERCISE 3');
console.log(' ')

function* createMaxSquaredNumberGenerator(max) {
  let n = 0

  // Loops until "n" is the same of "max"
  while (n < max) {
    n++;
    yield n * n
  }
}

for (const n of createMaxSquaredNumberGenerator(10)) {
  console.log(n)
}

console.log('----------------------------');