import readlineSync from 'readline-sync';

const getRandNum = () => Math.floor(Math.random() * 100);

const evenNumberBrainGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const randNum = getRandNum();
    let rightAnswer = '';
    if (randNum % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }

    const answer = readlineSync.question(`Question: ${randNum} `);
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
};

export default evenNumberBrainGame;
