import readlineSync from 'readline-sync';

const isEven = num => ((num % 2) ? 'no' : 'yes');
const getRandomInRange = (start, end) => (Math.floor(Math.random() * (end - start)) + start);
const findCommmonDevisor = (num1, num2) => {
  const minNumber = (num1 > num2) ? num2 : num1;
  let i = minNumber;
  for (; i > 0; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) break;
  }
  return i;
};
const executionGame = (rounds, textTask, makeQuestionAndAnswer, name) => {
  let namePlayer = name;
  if (name === undefined) {
    console.log('Welcome to the Brain Games!');
    console.log(textTask);
    console.log('');
    namePlayer = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${namePlayer}!`);
  }
  const getQuestionAndAnswer = makeQuestionAndAnswer();
  const question = getQuestionAndAnswer('question');
  const trueAnswer = getQuestionAndAnswer('trueAnswer');
  console.log(`Question: ${question} `);
  const ans = readlineSync.question('Your answer: ');
  if (ans === trueAnswer) console.log('Correct!'); else {
    console.log(`"${ans}" is wrong answer ;(. Correct answer was "${trueAnswer}". Let's try again, ${namePlayer}!`);
    return;
  }
  if (rounds === 1) { console.log(`Congratulations, ${namePlayer}!`); return; }
  executionGame(rounds - 1, textTask, makeQuestionAndAnswer, namePlayer);
};
export {
  executionGame, isEven, getRandomInRange, findCommmonDevisor,
};
