import gmLogic from '../scr/index.js';

const getRandom = () => Math.trunc(Math.random() * 100);
const isTrue = (exp, ans) => {
  if ((exp % 2 === 0 && ans === 'yes') || (exp % 2 === 1 && ans === 'no')) {
    return true;
  }
  return false;
};
const corectAnswer = (arg1, arg2) => (arg1 === 'yes' && arg2 % 2 === 1 ? 'no' : 'yes');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gmLogic(getRandom, isTrue, corectAnswer);
