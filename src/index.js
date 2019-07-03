
import readlineSync from 'readline-sync';

export const hello = () => {
  const actualName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualName}!`);
  return actualName;
};
export const question = (count, name) => {
  const number = (Math.floor(Math.random() * 15) + 1);
  const ans = readlineSync.question(`Question: ${number} `);
  const rest = number % 2;
  const trueAns = (rest > 0) ? 'no' : 'yes';
  if (((rest < 1) && (ans === 'yes')) || ((rest > 0) && (ans === 'no'))) console.log('Correct!'); else 
    return console.log(`"${ans}" is wrong answer ;(. Correct answer was "${trueAns}". Let's try again, ${name}!`);
  if (count === 1) return console.log(`Congratulations, ${name}!`);
  question(count - 1, name);
};
