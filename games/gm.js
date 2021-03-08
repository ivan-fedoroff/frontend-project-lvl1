import gmLogic from '../scr/index.js';

const getRandom = () => Math.trunc(Math.random() * 100);
const correctAnswer = (arg) => (arg % 2 === 0 ? 'yes' : 'no');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gmLogic(getRandom, correctAnswer);
