import { hello, welcome, executionGame } from '..';

export default () => {
  welcome();
  console.log('Find the greatest common divisor of given numbers.');
  console.log('');
  const name = hello();
  const data = () => {
    const num1 = (Math.round(Math.random() * 25) + 4);
    const num2 = (Math.round(Math.random() * 25) + 4);
    const minNumber = (num1 > num2) ? num2 : num1;
    const maxNumber = (num1 > num2) ? num1 : num2;
    const question = `${num1}  ${num2}`;
    let i = minNumber;
    for (; i > 0; i -= 1) {
      if ((minNumber % i === 0) && (maxNumber % i === 0)) break;
    }
    const trueAns = String(i);
    return request => ((request === 'question') ? question : trueAns);
  };
  executionGame(3, name, data);
};
