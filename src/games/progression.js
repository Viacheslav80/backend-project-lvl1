import { cons } from '@hexlet/pairs';
import { playGame, getRandomInRange } from '..';

const task = 'What number is missing in the progression?';
const lengthProgression = 10;
let trueAnswer = '';
const makeQuestionAndAnswer = () => {
  const increment = getRandomInRange(1, 8);
  let question = '';
  let start = getRandomInRange(1, 10);
  const indexRequiredNumber = getRandomInRange(1, lengthProgression);
  for (let i = 1; i <= lengthProgression; i += 1) {
    if (i === indexRequiredNumber) {
      question = `${question}  ..`;
      trueAnswer = String(start);
    } else question = `${question}  ${start}`;
    start += increment;
  }
  return cons(question, trueAnswer);
};
export default () => {
  playGame(task, makeQuestionAndAnswer);
};
