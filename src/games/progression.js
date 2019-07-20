import { cons } from '@hexlet/pairs';
import { executionGame, getRandomInRange } from '..';

const task = 'What number is missing in the progression?';
const makeQuestionAndAnswer = () => {
  const increment = getRandomInRange(1, 8);
  let startNum = getRandomInRange(1, 10);
  const lengthProgression = 10;
  const indexRequiredNumber = getRandomInRange(1, lengthProgression);
  let trueAnswer = '';
  let question = '';
  for (let i = 1; i <= lengthProgression; i += 1) {
    if (i === indexRequiredNumber) {
      question += '  ..'; trueAnswer = String(startNum);
    } else question = `${question}  ${startNum}`;
    startNum += increment;
  }
  return cons(question, trueAnswer);
};
export default () => {
  executionGame(task, makeQuestionAndAnswer);
};
