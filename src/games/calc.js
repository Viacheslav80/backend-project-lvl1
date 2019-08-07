import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInRange from '../utils';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
let trueAnswer;
const makeQuestionAndAnswer = () => {
  const num1 = getRandomInRange(1, 15);
  const num2 = getRandomInRange(1, 15);
  const operation = getRandomInRange(0, operations.length - 1);
  switch (operations[operation]) {
    case '+': trueAnswer = num1 + num2; break;
    case '-': trueAnswer = num1 - num2; break;
    case '*': trueAnswer = num1 * num2; break;
    default: break;
  }
  const question = `${num1} ${operations[operation]} ${num2}`;
  return cons(question, String(trueAnswer));
};
export default () => {
  playGame(task, makeQuestionAndAnswer);
};
