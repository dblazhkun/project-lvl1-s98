#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { getRandNum, wellcome, engine } from '..';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
const gameGCD = () => {
  const num1 = getRandNum();
  const num2 = getRandNum();
  const question = `${num1} ${num2}`;
  const rightAnswer = gcd(num1, num2);
  return cons(question, rightAnswer);
};

wellcome();
console.log('Find the greatest common divisor of given numbers.');
engine(gameGCD);
