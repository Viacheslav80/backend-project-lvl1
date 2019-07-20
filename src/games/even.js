import { cons } from '@hexlet/pairs';
import { executionGame, getRandomInRange } from '..';

const isEven = num => ((num % 2) ? 'no' : 'yes');
const task = 'Answer "yes" if number even otherwise answer "no"';
const makeQuestionAndAnswer = () => {
  const question = getRandomInRange(1, 15);
  const trueAnswer = isEven(question);
  return cons(question, trueAnswer);
};
export default () => {
  executionGame(task, makeQuestionAndAnswer);
};
