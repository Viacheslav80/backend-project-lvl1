import { cons } from '@hexlet/pairs';
import { playGame, getRandomInRange } from '..';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const numFirstOperation = 0;
const numEndOperation = operations.length - 1;
let trueAnswer;
const makeQuestionAndAnswer = () => {
  const num1 = getRandomInRange(1, 15);
  const num2 = getRandomInRange(1, 15);
  const randomOperationByNum = getRandomInRange(numFirstOperation, numEndOperation);
  switch (randomOperationByNum) {
    case operations.indexOf('+'): trueAnswer = `${num1 + num2}`; break;
    case operations.indexOf('-'): trueAnswer = `${num1 - num2}`; break;
    case operations.indexOf('*'): trueAnswer = `${num1 * num2}`; break;
    default: break;
  }
  const question = `${num1} ${operations[randomOperationByNum]} ${num2}`;
  return cons(question, trueAnswer);
};
export default () => {
  playGame(task, makeQuestionAndAnswer);
};
