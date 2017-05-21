#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { getRandNum, getRandomOperator, wellcome, engine } from '..';

const gameCalc = () => {
  const num1 = getRandNum();
  const num2 = getRandNum();
  const operator = getRandomOperator();
  let rightAnswer;
  if (operator === '+') {
    rightAnswer = String(num1 + num2);
  } else if (operator === '-') {
    rightAnswer = String(num1 - num2);
  } else if (operator === '*') {
    rightAnswer = String(num1 * num2);
  }

  const question = `${num1} ${operator} ${num2}`;

  return cons(question, rightAnswer);
};

wellcome();
console.log('What is the result of the expression?');
engine(gameCalc);
