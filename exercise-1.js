console.log(' ')
console.log('EXERCISE 1');
console.log(' ')

function* generator1() {
  yield 8;
  yield 9;
  yield 10;
  yield 11;
  yield 12;
}

const trigger1 = generator1();
console.log(trigger1.next());
console.log(trigger1.next());
console.log(trigger1.next());
console.log(trigger1.next());
console.log(trigger1.next());

console.log('OR')

for (const n of generator1()) {
  console.log(n)
}

console.log('----------------------------');