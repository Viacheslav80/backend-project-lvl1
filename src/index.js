import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const welcomeAndGetName = (task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  console.log('');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  return namePlayer;
};
const getRandomInRange = (start, end) => (Math.floor(Math.random() * (end - start)) + start);
const executionGame = (task, makeQuestionAndAnswer) => {
  const namePlayer = welcomeAndGetName(task);
  for (let round = 1; round <= 3; round += 1) {
    const questionAndAnswer = makeQuestionAndAnswer();
    const question = car(questionAndAnswer);
    const trueAnswer = cdr(questionAndAnswer);
    console.log(`Question: ${question} `);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) console.log('Correct!'); else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}". Let's try again, ${namePlayer}!`);
      return;
    }
  }
  console.log(`Congratulations, ${namePlayer}!`);
};
export {
  executionGame, getRandomInRange,
};
