import readlineSync from 'readline-sync';
import name from './cli.js';

const gmLogic = (ex, correctAnswer, i = 0) => { // eslint-disable-line consistent-return
  let k = i;
  if (k === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  const expression = ex();
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  const x = correctAnswer(expression);
  if (x === userAnswer) {
    console.log('Correct!');
    k += 1;
    gmLogic(ex, correctAnswer, k);
  } else {
    return console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${x}'.\nLet's try again, ${name}!`);
  }
};
export default gmLogic;
