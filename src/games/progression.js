import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomInRange from '../utils';

const task = 'What number is missing in the progression?';
const lengthProgression = 10;
const makeQuestionAndAnswer = () => {
  const increment = getRandomInRange(1, 8);
  let elementsQuestion = '';
  const start = getRandomInRange(1, 10);
  let element;
  const indexMissingNumber = getRandomInRange(1, lengthProgression);
  for (let i = 0; i < lengthProgression; i += 1) {
    element = (i !== indexMissingNumber) ? (start + increment * i) : '..';
    elementsQuestion = `${elementsQuestion}  ${element}`;
  }
  const question = elementsQuestion;
  const trueAnswer = `${start + increment * indexMissingNumber}`;
  return cons(question, trueAnswer);
};
export default () => {
  playGame(task, makeQuestionAndAnswer);
};
