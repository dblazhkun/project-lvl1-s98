import readlineSync from 'readline-sync';

const randNum = () => Math.floor(Math.random() * 100);

const getRandomOperator = () => {
  const getRandomInRange = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
  const rand = getRandomInRange(1, 3);
  if (rand === 1) {
    return '+';
  } else if (rand === 2) {
    return '-';
  }
  return '*';
};

const calculatorBrainGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const num1 = randNum();
    const num2 = randNum();
    const operator = getRandomOperator();
    let rightAnswer = '';
    if (operator === '+') {
      rightAnswer = String(num1 + num2);
    } else if (operator === '-') {
      rightAnswer = String(num1 - num2);
    } else if (operator === '*') {
      rightAnswer = String(num1 * num2);
    }

    const answer = readlineSync.question(`Question: ${num1} ${operator} ${num2} `);
    console.log(`Your answer: ${answer} `);

    String(rightAnswer);
    String(answer);

    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return console.log(`Let's try again, ${userName}!`);
    }

    console.log('Correct!');

    if (i === 2) {
      return console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default calculatorBrainGame;
