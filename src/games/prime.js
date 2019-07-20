import { cons } from '@hexlet/pairs';
import { executionGame, getRandomInRange } from '..';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const makeQuestionAndAnswer = () => {
  const number = getRandomInRange(1, 10);
  let trueAnswer = (number === 1) ? 'no' : 'yes';
  const question = `${number}`;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) trueAnswer = 'no';
  }
  return cons(question, trueAnswer);
};
export default () => {
  executionGame(task, makeQuestionAndAnswer);
};
