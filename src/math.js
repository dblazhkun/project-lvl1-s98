export const getRandNum = () => Math.floor(Math.random() * 100);
export const getRandomInRange = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
export const getRandomOperator = () => {
  getRandomInRange();
  const rand = getRandomInRange(1, 3);
  if (rand === 1) {
    return '+';
  } else if (rand === 2) {
    return '-';
  }
  return '*';
};
