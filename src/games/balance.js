import { cons } from 'hexlet-pairs';
import { engine } from '..';
import { getRandomInRange } from '../math';

const balance = () => {
  const rule = 'Balance the given number.';
  const gameBalance = () => {
    const question = getRandomInRange(100, 9999);

    const getBalancedNum = (arr) => {
      const max = Math.max(...arr);
      const min = Math.min(...arr);
      const delta = max - min;

      if (delta <= 1) {
        return arr.sort((a, b) => a - b).join('');
      }

      const maxIndex = arr.indexOf(max);
      const minIndex = arr.indexOf(min);

      const updatedArr = arr.slice(0);
      const shift = Math.floor(delta / 2);

      updatedArr[minIndex] += shift;
      updatedArr[maxIndex] -= shift;

      return getBalancedNum(updatedArr);
    };

    const getRightAnswer = (number) => {
      const numbersArray = String(number).split('').map(x => +x);
      return getBalancedNum(numbersArray);
    };
    const rightAnswer = getRightAnswer(question);

    return cons(question, rightAnswer);
  };

  engine(rule, gameBalance);
};

export default balance;
