import gmLogic from '../scr/index.js';

const getRandom = () => Math.trunc(Math.random() * 500);
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  let divis = 2;
  while (divis <= num / 2) {
    if (num % divis === 0) {
      return false;
    }
    divis += 1;
  }
  return true;
};
const correctAnswer = (arg) => (isPrime(arg) ? 'yes' : 'no');

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
gmLogic(getRandom, correctAnswer);
