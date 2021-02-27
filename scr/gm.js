import readlineSync from 'readline-sync';
import name from './cli.js';

const getRandom = () => {
  const x = Math.random() * 100;
  return Math.trunc(x);
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let k = 0; k < 4;) {
  if (k === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
  const number = getRandom();
  const trueValue = [number % 2 === 0 && 'yes', number % 2 === 1 && 'no'];
  const falseValue = [number % 2 === 0 && 'no', number % 2 === 1 && 'yes'];
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `, {
    trueValue,
    falseValue// eslint-disable-line comma-dangle
  });
  if (answer === true) {
    console.log('Correct!');
    k += 1;
  } else if (answer === false && number % 2 === 0) {
    console.log(`'no' is a wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    k = 0;
  } else if (answer === false && number % 2 === 1) {
    console.log(`'yes' is a wrong answer ;(. Correct answer was 'no'.\nLet's try again!, ${name}!`);
    k = 0;
  } else {
    break;
  }
}
