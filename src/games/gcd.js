import { executionGame, getRandomInRange } from '..';

export default () => {
  const textTask = 'Find the greatest common divisor of given numbers.';
  const data = () => {
    const num1 = getRandomInRange(4, 30);
    const num2 = getRandomInRange(4, 30);
    const minNumber = (num1 > num2) ? num2 : num1;
    const maxNumber = (num1 > num2) ? num1 : num2;
    const question = `${num1}  ${num2}`;
    let i = minNumber;
    for (; i > 0; i -= 1) {
      if ((minNumber % i === 0) && (maxNumber % i === 0)) break;
    }
    const trueAnswer = String(i);
    return request => ((request === 'question') ? question : trueAnswer);
  };
  executionGame(3, textTask, data);
};
