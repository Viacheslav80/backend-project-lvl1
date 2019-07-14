import readlineSync from 'readline-sync';

const isEven = num => ((num % 2) ? 'no' : 'yes');
const getRandomInRange = (start, end) => (Math.floor(Math.random() * (end - start)) + start);
const askName = () => {
  const actualName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualName}!`);
  return actualName;
};
const executionGame = (count, textTask, data, name) => {
  let namePlayer = name;
  if (name === undefined) {
    console.log('Welcome to the Brain Games!');
    console.log(textTask);
    console.log('');
    namePlayer = askName();
  }
  const gameData = data();
  const question = gameData('question');
  const trueAnswer = gameData('trueAnswer');
  console.log(`Question: ${question} `);
  const ans = readlineSync.question('Your answer: ');
  if (ans === trueAnswer) console.log('Correct!'); else {
    console.log(`"${ans}" is wrong answer ;(. Correct answer was "${trueAnswer}". Let's try again, ${namePlayer}!`);
    return;
  }
  if (count === 1) { console.log(`Congratulations, ${namePlayer}!`); return; }
  executionGame(count - 1, textTask, data, namePlayer);
};
export { executionGame, isEven, getRandomInRange };
