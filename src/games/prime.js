import { executionGame, getRandomInRange } from '..';

export default () => {
  const textTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const data = () => {
    const number = getRandomInRange(1, 10);
    let trueAnswer = (number === 1) ? 'no' : 'yes';
    const question = `${number}`;
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) trueAnswer = 'no';
    }
    return request => ((request === 'question') ? question : trueAnswer);
  };
  executionGame(3, textTask, data);
};
