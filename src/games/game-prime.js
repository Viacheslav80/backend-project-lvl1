import { hello, welcome, executionGame } from '..';

export default () => {
  welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  console.log('');
  const name = hello();
  const data = () => {
    const number = (Math.round(Math.random() * 9) + 1);
    let trueAns = (number === 1) ? 'no' : 'yes';
    const question = `${number}`;
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) trueAns = 'no';
    }
    return request => ((request === 'question') ? question : trueAns);
  };
  executionGame(3, name, data);
};
