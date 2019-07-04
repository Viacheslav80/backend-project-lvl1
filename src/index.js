
import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const hello = () => {
  const actualName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualName}!`);
  return actualName;
};
const executionGame1 = (count, name) => {
  const number = (Math.floor(Math.random() * 15) + 1);
  console.log(`Question: ${number} `);
  const ans = readlineSync.question(`Your answer: `);
  const rest = number % 2;
  const trueAns = (rest > 0) ? 'no' : 'yes';
  if (((rest < 1) && (ans === 'yes')) || ((rest > 0) && (ans === 'no'))) console.log('Correct!'); else {
    console.log(`"${ans}" is wrong answer ;(. Correct answer was "${trueAns}". Let's try again, ${name}!`);
    return;
  }
  if (count === 1) { console.log(`Congratulations, ${name}!`); return; }
  executionGame1(count - 1, name);
};
export const gameOne = () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no"');
  console.log('');
  executionGame1(3, hello());
};
