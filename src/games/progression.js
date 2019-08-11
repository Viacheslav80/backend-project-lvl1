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
  const missingElementIndex = getRandomInRange(1, lengthProgression);
  for (let i = 0; i < lengthProgression; i += 1) {
    element = (i !== missingElementIndex) ? (start + increment * i) : '..';
    question = (question === '') ? String(element) : `${question}  ${element}`;
  }
  const trueAnswer = String(start + increment * missingElementIndex);
  return cons(question, trueAnswer);
};
export default () => {
  playGame(task, makeQuestionAndAnswer);
};
