import { cons } from 'hexlet-pairs';
import { engine } from '..';
import { getRandNum } from '../math';

const gcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
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

  engine(rule, gameGCD);
};

export default gcd;
