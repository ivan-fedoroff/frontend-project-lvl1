import gmLogic from '../scr/index.js';

const getRandom = () => Math.trunc(Math.random() * 100);
const getExpression = () => `${getRandom()} ${getRandom()}`;
const getGCD = (num1, num2) => (num2 === 0 ? num1 : getGCD(num2, num1 % num2));

const isTrue = (exp, ans) => {
  const nums = exp.split(' ');
  const gcd = getGCD(Number(nums[0]), Number(nums[1]));
  if (Number(ans) === gcd) {
    return true;
  }
  return false;
};

const corectAnswer = (arg1, arg2) => {
  const nums = arg2.split(' ');
  const gcd = getGCD(Number(nums[0]), Number(nums[1]));
  if (Number(arg1) !== gcd) {
    return gcd;
  }
  return arg1;
};

console.log('Find the greatest common divisor of given numbers.');
gmLogic(getExpression, isTrue, corectAnswer);
