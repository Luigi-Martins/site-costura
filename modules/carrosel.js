export default function initTransitionImage() {
  const carrossel = document.querySelector(".carrossel");
  const imgs = document.querySelectorAll(".carrossel img");

  const avancar = document.querySelector(".avancar");
  const voltar = document.querySelector(".voltar");

  const largura = 800;
  const totalImg = imgs.length;

  let contador = 0;
  let intervalId;

  function mostrarImg() {
    const valor = -contador * largura;

    carrossel.style.transform = `translateX(${valor}px)`;
  }

  function avancarImagem() {
    contador++;

    if (contador >= totalImg) {
      contador = 0;
    }

    mostrarImg();
  }

  function voltarImagem() {
    contador--;

    if (contador < 0) {
      contador = totalImg - 1;
    }

    mostrarImg();
  }

  function iniciarCarrossel() {
    intervalId = setInterval(() => {
      avancarImagem();
    }, 2000);
  }

  function pararCarrossel() {
    clearInterval(intervalId);
  }

  function resetCarrossel() {
    pararCarrossel();
    iniciarCarrossel();
  }

  avancar.addEventListener("click", () => {
    avancarImagem();
    resetCarrossel();
  });

  voltar.addEventListener("click", () => {
    voltarImagem();
    resetCarrossel();
  });

  iniciarCarrossel();
}
