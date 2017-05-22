import { cons } from 'hexlet-pairs';
import { engine } from '..';
import { getRandNum } from '../math';

const even = () => {
  const rule = 'Answer "yes" if number even otherwise answer "no".';
  const gameEven = () => {
    const question = getRandNum();
    let rightAnswer = '';
    if (question % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    return cons(question, rightAnswer);
  };

  engine(rule, gameEven);
};

export default even;
