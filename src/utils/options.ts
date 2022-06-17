const getRandomLower = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = (): string => {
  const sym = '!@#$%&#';
  return sym[Math.floor(Math.random() * sym.length)];
};

export const randFunc: { [key: string]: () => string } = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numbers: getRandomNumber,
  symbols: getRandomSymbol,
};
