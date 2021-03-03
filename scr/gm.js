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
  const question = `Question: ${number}\nYour answer: `;
  const answer = readlineSync.question(question);
  const isTrue = (number % 2 === 0 && answer === 'yes') || (number % 2 === 1 && answer === 'no');
  const corectAnswer = answer === 'yes' ? 'no' : 'yes';
  if (isTrue === true) {
    console.log('Correct!');
    k += 1;
  } else if (isTrue === false) {
    console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${corectAnswer}'.\nLet's try again, ${name}!`);
    break;
  } else {
    break;
  }
}
