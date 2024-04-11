// Carrega a biblioteca jQuery
import $ from "https://code.jquery.com/jquery-3.6.0.min.js";

// Carrega a biblioteca Slick Carousel
import "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js";

const spans = document.querySelectorAll(".pricipal-titles-main");
spans.forEach((article, index) => {
  article.style.setProperty("--delay", index);
});

var aside = document.getElementById("barraRolagem");
// Nessa função verificaremos se o conteudo que colocamos no html do aside, vai exceder a altura que temos definida no css, no caso h=100%
function ajustarScroll() {
  if (section.scrollHeight > aside.clientHeight) {
    // Se o conteúdo exceder a altura do monitor, exibiremos o scroll
    aside.style.overflowY = "scroll";
  } else {
    // Se o conteúdo não exceder a altura, ocultaremos o scroll
    aside.style.overflowY = "hidden";
  }
}

// Esta função irá ajustar nosso scroll quando a pag for carregada
window.addEventListener("load", ajustarScroll);

// Aqui um resize, essa função ajuda no ajuste sempre que o tamanho da janela for alterado (bom para mq)
window.addEventListener("resize", ajustarScroll);



