import { executionGame, getRandomInRange } from '..';

export default () => {
  const textTask = 'What number is missing in the progression?';
  const makeQuestionAndAnswer = () => {
    const increment = getRandomInRange(1, 6);
    let startNum = getRandomInRange(1, 10);
    const indexRequiredNumber = getRandomInRange(1, 10);
    let trueAnswer = '';
    let question = '';
    for (let i = 1; i < 11; i += 1) {
      if (i === indexRequiredNumber) {
        question += '..  '; trueAnswer = String(startNum);
      } else question += `${startNum}  `;
      startNum += increment;
    }
    return request => ((request === 'question') ? question : trueAnswer);
  };
  const rounds = 3;
  executionGame(rounds, textTask, makeQuestionAndAnswer);
};
