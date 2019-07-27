import { cons } from '@hexlet/pairs';
import { playGame, getRandomInRange } from '..';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return (number === 1) ? 'no' : 'yes';
};
const makeQuestionAndAnswer = () => {
  const number = getRandomInRange(1, 10);
  const trueAnswer = isPrime(number);
  const question = `${number}`;
  return cons(question, trueAnswer);
};
export default () => {
  playGame(task, makeQuestionAndAnswer);
};
