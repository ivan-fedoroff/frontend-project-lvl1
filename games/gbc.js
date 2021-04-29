/* eslint-disable no-eval */
import gmLogic from '../scr/index.js';

const getRandom = () => Math.trunc(Math.random() * 30);
const operators = ['+', '-', '*'];
const getRandInd = () => Math.floor(Math.random() * 3);
const getExpression = () => `${getRandom()} ${operators[getRandInd()]} ${getRandom()}`;
const parseArg = (arg) => arg.split(' ');
const correctAnswer = (arg) => {
  const argArr = parseArg(arg);
  switch (argArr[1]) {
    case operators[0]:
      return String(Number(argArr[0]) + Number(argArr[2]));
    case operators[1]:
      return String(Number(argArr[0]) - Number(argArr[2]));
    default:
      return String(Number(argArr[0]) * Number(argArr[2]));
  }
};

console.log('What is the result of the expression?');
gmLogic(getExpression, correctAnswer);
