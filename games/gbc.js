import gmLogic from '../scr/index.js';

const getRandom = () => Math.trunc(Math.random() * 30);
const operators = ['+', '-', '*'];
const getRandInd = () => Math.floor(Math.random() * 3);
const getExpression = () => `${getRandom()} ${operators[getRandInd()]} ${getRandom()}`;
const isTrue = (exp, ans) => {
  if (Number(ans) === exp) {
    return true;
  }
  return false;
};
const corectAnswer = (arg1, arg2) => {
  if (Number(arg1) !== arg2) {
    return arg2;
  }
  return arg1;
};
console.log('What is the result of the expression?');
gmLogic(getExpression, isTrue, corectAnswer);
