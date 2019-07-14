import { executionGame, getRandomInRange, findCommmonDevisor } from '..';

export default () => {
  const textTask = 'Find the greatest common divisor of given numbers.';
  const data = () => {
    const num1 = getRandomInRange(4, 30);
    const num2 = getRandomInRange(4, 30);
    const question = `${num1}  ${num2}`;
    const trueAnswer = String(findCommmonDevisor(num1, num2));
    return request => ((request === 'question') ? question : trueAnswer);
  };
  const rounds = 3;
  executionGame(rounds, textTask, data);
};
