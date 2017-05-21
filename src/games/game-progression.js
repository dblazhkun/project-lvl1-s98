import { cons } from 'hexlet-pairs';
import { getRandNum, getRandomInRange, wellcome, engine } from '..';

const progression = () => {
  const gameProgression = () => {
    const startNum = getRandNum();
    const stepNum = getRandNum();
    const getProgressionArray = (start, step) => {
      const line = [start];
      for (let i = 1; i < 10; i += 1) {
        line[i] = line[i - 1] + step;
      }
      return line;
    };
    const progressionArray = getProgressionArray(startNum, stepNum);
    const randomElementOfArray = getRandomInRange(0, 9);
    const rightAnswer = String(progressionArray[randomElementOfArray]);

    const getQuestion = () => {
      progressionArray[randomElementOfArray] = '..';
      let string = '';
      for (let i = 0; i < 9; i += 1) {
        string += `${progressionArray[i]} `;
      }
      string += progressionArray[9];
      return string;
    };
    const question = getQuestion();
    return cons(question, rightAnswer);
  };

  wellcome();
  console.log('What number is missing in this progression?');
  engine(gameProgression);
};

export default progression;
