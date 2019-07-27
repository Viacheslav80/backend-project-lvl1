import { cons } from '@hexlet/pairs';
import { playGame, getRandomInRange } from '..';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    return (number % i === 0);
  }
  return (number === 1);
};
const makeQuestionAndAnswer = () => {
  const question = getRandomInRange(1, 10);
  const trueAnswer = isPrime(question) ? 'no' : 'yes';
  return cons(question, trueAnswer);
};
export default () => {
  playGame(task, makeQuestionAndAnswer);
};
