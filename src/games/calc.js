import { cons } from '@hexlet/pairs';
import { executionGame, getRandomInRange } from '..';

const task = 'What is the result of the expression?';
const makeQuestionAndAnswer = () => {
  const num1 = getRandomInRange(1, 15);
  const num2 = getRandomInRange(1, 15);
  const numFirstOperation = 0;
  const numEndOperation = 2;
  let trueAnswer;
  let question;
  const randomOperationByNum = getRandomInRange(numFirstOperation, numEndOperation);
  const operations = ['add', 'sub', 'mul'];
  switch (randomOperationByNum) {
    case operations.indexOf('add'): trueAnswer = `${num1 + num2}`;
      question = `${num1} + ${num2}`; break;
    case operations.indexOf('sub'): trueAnswer = `${num1 - num2}`;
      question = `${num1} - ${num2}`; break;
    case operations.indexOf('mul'): trueAnswer = `${num1 * num2}`;
      question = `${num1} * ${num2}`; break;
    default: break;
  }
  return cons(question, trueAnswer);
};
export default () => {
  executionGame(task, makeQuestionAndAnswer);
};
