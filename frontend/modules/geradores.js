const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const simbols = ",.;~^[]{}!@#$%&*()_-=+";

const maiscula = () => String.fromCharCode(rand(65, 91));
const minuscula = () => String.fromCharCode(rand(97, 123));
const numero = () => String.fromCharCode(rand(48, 58));
const simbolo = () => simbols[rand(0, simbols.length)];

export const geraSenha = (qtd, maisculas, minusculas, numeros, simbolos) => {
  const senhaArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maisculas && senhaArray.push(maiscula());
    minusculas && senhaArray.push(minuscula());
    numeros && senhaArray.push(numero());
    simbolos && senhaArray.push(simbolo());
  }

  const senhaEmbaralhada = (array) => {
    for (let i = array.length; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    return array.join("").slice(0, qtd);
  };

  return senhaEmbaralhada(senhaArray);
};
