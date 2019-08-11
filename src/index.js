import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const roundsCount = 3;
export default (task, makeQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  console.log('');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  for (let i = 1; i <= roundsCount; i += 1) {
    const questionAndAnswer = makeQuestionAndAnswer();
    const question = car(questionAndAnswer);
    const trueAnswer = cdr(questionAndAnswer);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== trueAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};
