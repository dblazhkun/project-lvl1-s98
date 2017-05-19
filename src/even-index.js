import readlineSync from 'readline-sync';

const randNum = () => Math.floor(Math.random() * 100);

const evenNumberBrainGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  const askEven = () => {
    const getRandNum = randNum();
    const checkAnswer = (answer) => {
      if (getRandNum % 2 === 0 && answer !== 'yes') {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`);
        return console.log(`Let's try again, ${userName}!`);
      } else if (getRandNum % 2 !== 0 && answer !== 'no') {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
        return console.log(`Let's try again, ${userName}!`);
      }
      return console.log('Correct!');
    };
    const askAnswer = readlineSync.question(`Question: ${getRandNum} `);
    console.log(`Your answer: ${askAnswer} `);
    return checkAnswer(askAnswer);
  };

  askEven();
  askEven();
  askEven();
};

export default evenNumberBrainGame;
