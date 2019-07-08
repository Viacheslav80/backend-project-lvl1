import { hello, welcome, executionGame } from '..';

export default () => {
  welcome();
  console.log('What number is missing in the progression?');
  console.log('');
  const name = hello();
  const data = () => {
    const increment = (Math.round(Math.random() * 5) + 1);
    let startNum = (Math.round(Math.random() * 6) + 1);
    const indexRequiredNumber = (Math.round(Math.random() * 9) + 1);
    let trueAns = '';
    let question = '';
    for (let i = 1; i < 11; i += 1) {
      if (i === indexRequiredNumber) {
        question += '..  '; trueAns = String(startNum);
      } else question += `${startNum}  `;
      startNum += increment;
    }
    return request => ((request === 'question') ? question : trueAns);
  };
  executionGame(3, name, data);
};
