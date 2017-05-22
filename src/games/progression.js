import { cons } from 'hexlet-pairs';
import { engine } from '..';
import { getRandNum, getRandomInRange } from '../math';

const progression = () => {
  const rule = 'What number is missing in this progression?';
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
      return progressionArray.join(' ');
    };
    const question = getQuestion();
    return cons(question, rightAnswer);
  };

  engine(rule, gameProgression);
};

export default progression;
