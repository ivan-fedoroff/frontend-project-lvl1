import readlineSync from 'readline-sync';
import name from './cli.js';

const gmLogic = (ex, cA, i = 0) => { // eslint-disable-line consistent-return
  let k = i;
  if (k === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  const expression = ex();
  const answer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  const x = cA(expression);
  if (x === answer) {
    console.log('Correct!');
    k += 1;
    gmLogic(ex, cA, k);
  } else {
    return console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${x}'.\nLet's try again, ${name}!`);
  }
};
export default gmLogic;
