import { cons } from 'hexlet-pairs';
import engine from '..';
import { getRandNum, getRandomOperator } from '../math';

const calc = () => {
  const rule = 'What is the result of the expression?';
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

  engine(rule, gameCalc);
};

export default calc;
