import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const hello = () => {
  const actualName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualName}!`);
  return actualName;
};
export const executionGame = (count, name, data) => {
  const gameData = data();
  const question = gameData('question');
  const trueAns = gameData('trueAns');
  console.log(`Question: ${question} `);
  const ans = readlineSync.question('Your answer: ');
  if (ans === trueAns) console.log('Correct!'); else {
    console.log(`"${ans}" is wrong answer ;(. Correct answer was "${trueAns}". Let's try again, ${name}!`);
    return;
  }
  if (count === 1) { console.log(`Congratulations, ${name}!`); return; }
  executionGame(count - 1, name, data);
};


