import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { executionGame, getRandomInRange } from '..';

const task = 'What is the result of the expression?';
const makeQuestionAndAnswer = () => {
  const num1 = getRandomInRange(1, 15);
  const num2 = getRandomInRange(1, 15);
  const numOperation = getRandomInRange(0, 2);
  const expressions = cons((num1 - num2), cons((num1 + num2), (num2 * num2)));
  let question;
  let trueAnswer;
  switch (numOperation) {
    case 0: trueAnswer = String(car(cdr(expressions)));
      question = `${num1} + ${num2}`; break;
    case 1: trueAnswer = String(car(expressions));
      question = `${num1} - ${num2}`; break;
    case 2: trueAnswer = String(cdr(cdr(expressions)));
      question = `${num1} * ${num2}`; break;
    default: break;
  }

  return cons(question, trueAnswer);
};
export default () => {
  executionGame(task, makeQuestionAndAnswer);
};
