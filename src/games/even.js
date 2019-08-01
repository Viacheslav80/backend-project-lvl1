import { cons } from '@hexlet/pairs';
import { playGame, getRandomInRange } from '..';

const isEven = num => num % 2;
const task = 'Answer "yes" if number even otherwise answer "no"';
const makeQuestionAndAnswer = () => {
  const question = getRandomInRange(1, 15);
  const trueAnswer = isEven(question) ? 'no' : 'yes';
  return cons(question, trueAnswer);
};
export default () => {
  playGame(task, makeQuestionAndAnswer);
};
