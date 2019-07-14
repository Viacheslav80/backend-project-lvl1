import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { executionGame, getRandomInRange } from '..';

export default () => {
  const textTask = 'What is the result of the expression?';
  const data = () => {
    const num1 = getRandomInRange(1, 15);
    const num2 = getRandomInRange(1, 15);
    const getNumOperation = getRandomInRange(0, 2);
    const expression = cons(getNumOperation, cons(num1, num2));
    let question;
    let trueAnswer;
    switch (car(expression)) {
      case 0: trueAnswer = String(car(cdr(expression)) + cdr(cdr(expression)));
        question = `${car(cdr(expression))} + ${cdr(cdr(expression))}`; break;
      case 1: trueAnswer = String(car(cdr(expression)) - cdr(cdr(expression)));
        question = `${car(cdr(expression))} - ${cdr(cdr(expression))}`; break;
      case 2: trueAnswer = String(car(cdr(expression)) * cdr(cdr(expression)));
        question = `${car(cdr(expression))} * ${cdr(cdr(expression))}`; break;
      default: break;
    }
    return request => ((request === 'question') ? question : trueAnswer);
  };
  const rounds = 3;
  executionGame(rounds, textTask, data);
};
