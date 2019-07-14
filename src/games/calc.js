import { executionGame, getRandomInRange } from '..';

export default () => {
  const textTask = 'What is the result of the expression?';
  const data = () => {
    const num1 = getRandomInRange(1, 15);
    const num2 = getRandomInRange(1, 15);
    const num3 = getRandomInRange(0, 2);
    let question;
    let trueAnswer;
    switch (num3) {
      case 0: trueAnswer = String(num1 + num2); question = `${num1} + ${num2}`; break;
      case 1: trueAnswer = String(num1 - num2); question = `${num1} - ${num2}`; break;
      case 2: trueAnswer = String(num1 * num2); question = `${num1} * ${num2}`; break;
      default: break;
    }
    return request => ((request === 'question') ? question : trueAnswer);
  };
  executionGame(3, textTask, data);
};
