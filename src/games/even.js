import { executionGame, isEven, getRandomInRange } from '..';

export default () => {
  const textTask = 'Answer "yes" if number even otherwise answer "no"';
  const data = () => {
    const question = getRandomInRange(1, 15);
    const trueAnswer = isEven(question);
    return request => ((request === 'question') ? question : trueAnswer);
  };
  const rounds = 3;
  executionGame(rounds, textTask, data);
};
