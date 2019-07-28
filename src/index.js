import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const getRandomInRange = (start, end) => (Math.round(Math.random() * (end - start)) + start);
const allRound = 3;
const playGame = (task, makeQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  console.log('');
  const namePlayer = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${namePlayer}!`);
  for (let round = 1; round <= allRound; round += 1) {
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
  playGame, getRandomInRange,
};
