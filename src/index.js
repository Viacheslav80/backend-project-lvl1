
import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const hello = () => {
  const actualName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualName}!`);
  return actualName;
};
const executionGame1 = (count, name, data) => {
  const thisData = data();
  const question = thisData('question');
  const trueAns = thisData('trueAns');
  console.log(`Question: ${question} `);
  const ans = readlineSync.question('Your answer: ');
  if (ans === trueAns) console.log('Correct!'); else {
    console.log(`"${ans}" is wrong answer ;(. Correct answer was "${trueAns}". Let's try again, ${name}!`);
    return;
  }
  if (count === 1) { console.log(`Congratulations, ${name}!`); return; }
  executionGame1(count - 1, name, data);
};
export const gameOne = () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no"');
  console.log('');
  const name = hello();
  const data = () => {
    const question = (Math.floor(Math.random() * 15) + 1);
    const rest = question % 2;
    const trueAns = (rest > 0) ? 'no' : 'yes';
    return request => ((request === 'question') ? question : trueAns);
  };
  executionGame1(3, name, data);
};
export const gameTwo = () => {
  welcome();
  console.log('What is the result of the expression?');
  console.log('');
  const name = hello();
  const data = () => {
    const num1 = (Math.round(Math.random() * 12) + 1);
    const num2 = (Math.round(Math.random() * 12) + 1);
    const num3 = Math.round(Math.random() * 2);
    let question;
    let trueAns;
    switch (num3) {
      case 0: trueAns = String(num1 + num2); question = `${num1} + ${num2}`; break;
      case 1: trueAns = String(num1 - num2); question = `${num1} - ${num2}`; break;
      case 2: trueAns = String(num1 * num2); question = `${num1} * ${num2}`; break;
      default: trueAns = num2 * num3; question = `"${num1}" * "${num2}"`; break;
    }
    return request => ((request === 'question') ? question : trueAns);
  };
  executionGame1(3, name, data);
};
