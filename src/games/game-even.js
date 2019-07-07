import { hello, welcome, executionGame } from '..'; 


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
  executionGame(3, name, data);
};
 
