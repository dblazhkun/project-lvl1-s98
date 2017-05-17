export const readlineSync = () => {
  let readlineSync = require('readline-sync');
  // Wait for user's response.
  let userName = readlineSync.question('May I have your name? ');
  return console.log('Hi ' + userName + '!');
};
