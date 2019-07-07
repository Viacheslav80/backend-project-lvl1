import { hello, welcome, executionGame } from '..';

export default () => {
  welcome();
  console.log('What is the result of the expression?');
  console.log('');
  const name = hello();
  const data = () => {
    const num1 = (Math.round(Math.random() * 12) + 1);
    const num2 = (Math.round(Math.random() * 12) + 1);
    const num3 = Math.round(Math.random() * 2);
    let question;
    let trueAns;
    switch (num3) {
      case 0: trueAns = String(num1 + num2); question = `${num1} + ${num2}`; break;
      case 1: trueAns = String(num1 - num2); question = `${num1} - ${num2}`; break;
      case 2: trueAns = String(num1 * num2); question = `${num1} * ${num2}`; break;
      default: break;
    }
    return request => ((request === 'question') ? question : trueAns);
  };
  executionGame(3, name, data);
};
