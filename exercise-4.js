console.log(' ')
console.log('EXERCISE 4');
console.log(' ')

function* randomizeArrayOrderGenerator(array) {
  const available = array

  while (available.length !== 0) {
    const randomIndex = Math.floor(Math.random() * available.length)
    const value = available[randomIndex];

    // Remove the used value from the list of values
    available.splice(randomIndex, 1);

    yield value;
  }

}

const names = ['Guilherme', 'Gabriela', 'João', 'Maria'];
const uniqueNames = randomizeArrayOrderGenerator(names)

for (const name of uniqueNames) {
  console.log(name)
}

console.log('----------------------------');