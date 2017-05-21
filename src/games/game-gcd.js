import { cons } from 'hexlet-pairs';
import { getRandNum, wellcome, engine } from '..';

const gcd = () => {
  const findGCD = (a, b) => {
    if (b === 0) {
      return a;
    }
    return findGCD(b, a % b);
  };
  const gameGCD = () => {
    const num1 = getRandNum();
    const num2 = getRandNum();
    const question = `${num1} ${num2}`;
    const rightAnswer = findGCD(num1, num2);
    return cons(question, rightAnswer);
  };

  wellcome();
  console.log('Find the greatest common divisor of given numbers.');
  engine(gameGCD);
};

export default gcd;
