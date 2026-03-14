import { geraSenha } from "./geradores.js";
import { animarSenha } from "./animacaoSenha.js";

const qtd = document.querySelector("#qtd");
const button = document.querySelector(".gerar-senha");
const clip = document.querySelector(".clip");

const maisculas = document.querySelector("#chk-maiusculas");
const minusculas = document.querySelector("#chk-minusculas");
const numeros = document.querySelector("#chk-numeros");
const simbolos = document.querySelector("#chk-simbolos");

const senhaGerada = document.querySelector(".senha-gerada");

export const generatorPage = () => {
  const quantidade = qtd.value;
  const option = ["Tamanho inválido!", "Selecione alguma opção"];

  if (quantidade > 99) {
    senhaGerada.innerHTML = option[0];
  } else if (quantidade === "") {
    senhaGerada.innerHTML = option[0];
  } else if (
    maisculas.checked !== true &&
    minusculas.checked !== true &&
    numeros.checked !== true &&
    simbolos.checked !== true
  ) {
    senhaGerada.innerHTML = option[1];
  } else {
    const senha = geraSenha(
      quantidade,
      maisculas.checked,
      minusculas.checked,
      numeros.checked,
      simbolos.checked,
    );
    senhaGerada.innerHTML = animarSenha(senha);
  }
};

export const clipButton = () => {
  navigator.clipboard.writeText(senhaGerada.innerHTML);
};
