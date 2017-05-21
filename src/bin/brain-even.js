#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { getRandNum, wellcome, engine } from '..';

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

wellcome();
console.log('Answer "yes" if number even otherwise answer "no".');
engine(gameEven);
