const senhaEl = document.querySelector(".senha-gerada");

export const animarSenha = (senhaFinal) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

  let contador = 0;

  senhaEl.classList.add("animando");

  const intervalo = setInterval(() => {
    let senhaFake = "";

    for (let i = 0; i < senhaFinal.length; i++) {
      senhaFake += chars[Math.floor(Math.random() * chars.length)];
    }

    senhaEl.innerText = senhaFake;
    contador++;

    if (contador > 15) {
      clearInterval(intervalo);
      senhaEl.innerText = senhaFinal;
      senhaEl.classList.remove("animando");
    }
  }, 30);
}