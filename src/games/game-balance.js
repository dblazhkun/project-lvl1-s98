import { cons } from 'hexlet-pairs';
import { getRandomInRange, engine } from '..';

const balance = () => {
  const rule = 'Balance the given number.';
  const gameBalance = () => {
    const getRightAnswer = (num) => {
      const getArrFromNum = Array.from(num.toString()).map(Number);
      if (getArrFromNum.every(item => item === getArrFromNum[0])) {
        return getArrFromNum.join('');
      }
      const fixLengthArr = getArrFromNum.slice().fill(0);
      let sumOfDigits = getArrFromNum.reduce((acc, item) => acc + item);
      const fn = (arr = fixLengthArr) => {
        const newArr = arr.reduce((acc, _, i) => {
          if (sumOfDigits === 0) {
            return acc;
          }
          sumOfDigits -= 1;
          acc[i] += 1;
          return acc;
        }, arr);
        return sumOfDigits === 0 ? newArr.reverse().join('') : fn(newArr);
      };
      return fn();
    };
    const question = getRandomInRange(100, 999);
    const rightAnswer = getRightAnswer(question);
    return cons(question, rightAnswer);
  };
  engine(rule, gameBalance);
};

export default balance;
