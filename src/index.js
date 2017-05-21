import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getRandNum = () => Math.floor(Math.random() * 100);
export const getRandomInRange = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
export const getRandomOperator = () => {
  getRandomInRange();
  const rand = getRandomInRange(1, 3);
  if (rand === 1) {
    return '+';
  } else if (rand === 2) {
    return '-';
  }
  return '*';
};

export const engine = (rule, pair) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const actualPair = pair();
    const question = String(car(actualPair));
    const rightAnswer = String(cdr(actualPair));
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer} `);

    if (rightAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return console.log(`Let's try again, ${userName}!`);
    }

    console.log('Correct!');

    if (i === 2) {
      return console.log(`Congratulations, ${userName}!`);
    }
  }
  return undefined;
};
