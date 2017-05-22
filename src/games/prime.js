import { cons } from 'hexlet-pairs';
import { engine } from '..';
import { getRandNum } from '../math';

const prime = () => {
  const rule = 'Answer "yes" if number prime otherwise answer "no".';
  const gamePrime = () => {
    const question = getRandNum();
    const isPrime = (number) => {
      if (number < 2) {
        return false;
      }
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    };

    let rightAnswer = '';
    if (isPrime(question) === true) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    return cons(question, rightAnswer);
  };

  engine(rule, gamePrime);
};

export default prime;
