import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const engine = (rule, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const gameState = game();
    const question = String(car(gameState));
    const rightAnswer = String(cdr(gameState));
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer} `);

    if (rightAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return console.log(`Let's try again, ${userName}!`);
    }

    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default engine;
