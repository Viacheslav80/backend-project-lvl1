import { cons } from '@hexlet/pairs';
import { playGame } from '..';
import { getRandomInRange } from '../utils';

const findGreatestCommonDevisor = (num1, num2) => {
  const minNumber = (num1 > num2) ? num2 : num1;
  let i = minNumber;
  for (; i > 0; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) break;
  }
  return i;
};
const task = 'Find the greatest common divisor of given numbers.';
const makeQuestionAndAnswer = () => {
  const num1 = getRandomInRange(4, 30);
  const num2 = getRandomInRange(4, 30);
  const question = `${num1}  ${num2}`;
  const trueAnswer = String(findGreatestCommonDevisor(num1, num2));
  return cons(question, trueAnswer);
};
export default () => {
  playGame(task, makeQuestionAndAnswer);
};
