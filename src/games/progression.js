import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInRange from '../utils';

const task = 'What number is missing in the progression?';
const lengthProgression = 10;
const makeQuestionAndAnswer = () => {
  const increment = getRandomInRange(1, 8);
  let question = '';
  const start = getRandomInRange(1, 10);
  let element;
  const indexTarget = getRandomInRange(1, lengthProgression);
  for (let i = 0; i < lengthProgression; i += 1) {
    element = start + increment * i;
    if (i === indexTarget) element = '..';
    question = `${question}  ${element}`;
  }
  const trueAnswer = `${start + increment * indexTarget}`;
  return cons(question, trueAnswer);
};
export default () => {
  playGame(task, makeQuestionAndAnswer);
};
