import { cons } from '@hexlet/pairs';
import { playGame, getRandomInRange } from '..';

const task = 'What number is missing in the progression?';
const lengthProgression = 10;
const makeQuestionAndAnswer = () => {
  const increment = getRandomInRange(1, 8);
  let question = '';
  const start = getRandomInRange(0, 9);
  let element;
  const indexRequiredNumber = getRandomInRange(1, lengthProgression);
  for (let i = 0; i < lengthProgression; i += 1) {
    element = start + increment * i;
    if (i === indexRequiredNumber) element = '..';
    question = `${question}  ${element}`;
  }
  const trueAnswer = `${start + increment * indexRequiredNumber}`;
  return cons(question, trueAnswer);
};
export default () => {
  playGame(task, makeQuestionAndAnswer);
};
