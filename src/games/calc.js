import { cons } from '@hexlet/pairs';
import { executionGame, getRandomInRange } from '..';

const task = 'What is the result of the expression?';
const add = (num1, num2) => [num1 + num2, '+'];
const sub = (num1, num2) => [num1 - num2, '-'];
const mul = (num1, num2) => [num1 * num2, '*'];
const makeQuestionAndAnswer = () => {
  const num1 = getRandomInRange(1, 15);
  const num2 = getRandomInRange(1, 15);
  const numFirstOperation = 0;
  const numEndOperation = 2;
  const randomOperationByNum = getRandomInRange(numFirstOperation, numEndOperation);
  const operations = [add(num1, num2), sub(num1, num2), mul(num1, num2)];
  const trueAnswer = `${operations[randomOperationByNum][0]}`;
  const question = `${num1} ${operations[randomOperationByNum][1]} ${num2}`;
  return cons(question, trueAnswer);
};
export default () => {
  executionGame(task, makeQuestionAndAnswer);
};
