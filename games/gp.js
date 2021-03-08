import gmLogic from '../scr/index.js';

const getProgression = () => {
  const pr = [Math.floor(Math.random() * 20)];
  const k = Math.round(Math.random() * 6 + 1);
  for (let i = 0; i < 10; i += 1) {
    pr.push(pr[i] + k);
  }
  return pr;
};
const getExpression = () => {
  const prsn = getProgression();
  prsn[Math.floor(Math.random() * 10)] = '..';
  let strExp = String(prsn[0]);
  for (let i = 1; i < 10; i += 1) {
    strExp = `${strExp} ${prsn[i]}`;
  }
  return strExp;
};
const correctAnswer = (arg) => {
  const ex = arg.split(' ');
  const i = ex.indexOf('..');
  let x;
  if (i > 5) {
    x = Number(ex[i - 1]) + (Number(ex[i - 1]) - Number(ex[i - 2]));
  } else {
    x = Number(ex[i + 1]) - (Number(ex[i + 2]) - Number(ex[i + 1]));
  }
  return String(x);
};
console.log('What number is missing in the progression?');
gmLogic(getExpression, correctAnswer);
