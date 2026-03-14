const rand = (max) => {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] % max;
};

const simbolsString = ",.;~^[]{}!@#$%&*()_-=+";
const maisculaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculaString = "abcdefghijklmnopqrstuvwxyz";
const numbersString = "0123456789";

const simbols = () => simbolsString[rand(simbolsString.length)];
const maisculas = () => maisculaString[rand(maisculaString.length)];
const minusculas = () => minusculaString[rand(minusculaString.length)];
const numbers = () => numbersString[rand(numbersString.length)];

export const geraSenha = (qtd, maisc, minusc, number, simbs) => {
  const passwordArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maisc && passwordArray.push(maisculas());
    minusc && passwordArray.push(minusculas());
    number && passwordArray.push(numbers());
    simbs && passwordArray.push(simbols());
  }

  const passwordScrambled = (array) => {
    for (let i = array.length; i > 0; i--) {
      const j = (rand(100) * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    return array.join("").slice(0, qtd);
  };

  return passwordScrambled(passwordArray);
};


