/* eslint-disable no-eval */

import readlineSync from 'readline-sync';
import name from './cli.js';

const gmLogic = (ex, iT, cA, i = 0) => { // eslint-disable-line consistent-return
  let k = i;
  if (k === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  const expression = String(ex());
  const culcExp = eval(expression);
  const answer = readlineSync.question(`Question: ${expression}\nYour answer: `);
  if (iT(culcExp, answer) === true) {
    console.log('Correct!');
    k += 1;
    gmLogic(ex, iT, cA, k);
  } else if (iT(expression, answer) === false) {
    return console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${cA(answer, culcExp)}'.\nLet's try again, ${name}!`);
  } else {
    return console.log('wrong input');
  }
};
export default gmLogic;
