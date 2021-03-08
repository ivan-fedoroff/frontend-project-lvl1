/* eslint-disable no-eval */
import gmLogic from '../scr/index.js';

const getRandom = () => Math.trunc(Math.random() * 30);
const operators = ['+', '-', '*'];
const getRandInd = () => Math.floor(Math.random() * 3);
const getExpression = () => `${getRandom()} ${operators[getRandInd()]} ${getRandom()}`;
const correctAnswer = (arg) => String(eval(arg));

console.log('What is the result of the expression?');
gmLogic(getExpression, correctAnswer);
