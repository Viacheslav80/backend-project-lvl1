import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInRange from '../utils';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const makeQuestionAndAnswer = () => {
  let trueAnswer;
  const num1 = getRandomInRange(1, 15);
  const num2 = getRandomInRange(1, 15);
  const operation = operations[getRandomInRange(0, operations.length - 1)];
  switch (operation) {
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
