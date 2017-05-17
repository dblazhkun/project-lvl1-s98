import readlineSync from 'readline-sync';

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hi ${userName} !`);
};

export default getName;
