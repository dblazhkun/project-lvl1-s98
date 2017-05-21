import { cons } from 'hexlet-pairs';
import { getRandNum, wellcome, engine } from '..';

const prime = () => {
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

  wellcome();
  console.log('Answer "yes" if number prime otherwise answer "no".');
  engine(gamePrime);
};

export default prime;
