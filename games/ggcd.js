import gmLogic from '../scr/index.js';

const getRandom = () => Math.trunc(Math.random() * 100);
const getExpression = () => `${getRandom()} ${getRandom()}`;
const getGCD = (num1, num2) => (num2 === 0 ? num1 : getGCD(num2, num1 % num2));

const correctAnswer = (arg) => {
  const nums = arg.split(' ');
  const gcd = String(getGCD(Number(nums[0]), Number(nums[1])));
  return gcd;
};

console.log('Find the greatest common divisor of given numbers.');
gmLogic(getExpression, correctAnswer);
