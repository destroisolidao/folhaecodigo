// Folha & Código | MOCATEC 2026
// Tudo aqui respeita quem pediu "movimento reduzido" no sistema.

const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const cabecalho = document.querySelector(".cabecalho");
const botaoMenu = document.querySelector(".botao-menu");
const menu = document.getElementById("menu");
const hero = document.querySelector(".hero");

// 1. Menu no celular
function fecharMenu() {
  menu.classList.remove("aberto");
  botaoMenu.setAttribute("aria-expanded", "false");
}

botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", String(aberto));
});

menu.addEventListener("click", (evento) => {
  if (evento.target.closest("a")) fecharMenu();
});

// 2. Rolagem: cabeçalho escuro e parallax do fundo
let aguardando = false;

function aoRolar() {
  cabecalho.classList.toggle("rolado", window.scrollY > 40);

  if (!reduzirMovimento && window.scrollY < window.innerHeight) {
    hero.style.setProperty("--py", (window.scrollY * 0.25).toFixed(1));
  }
  aguardando = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!aguardando) {
      requestAnimationFrame(aoRolar);
      aguardando = true;
    }
  },
  { passive: true }
);
aoRolar();

// 3. Parallax com o mouse (só em computador)
if (!reduzirMovimento && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (evento) => {
    hero.style.setProperty("--mx", (evento.clientX / window.innerWidth - 0.5).toFixed(3));
    hero.style.setProperty("--my", (evento.clientY / window.innerHeight - 0.5).toFixed(3));
  });
}

// 4. Vagalumes: pequenos pontos de luz espalhados pela floresta
if (!reduzirMovimento) {
  const caixa = document.querySelector(".vagalumes");
  const quantidade = window.innerWidth < 760 ? 8 : 14;

  for (let i = 0; i < quantidade; i++) {
    const vagalume = document.createElement("span");
    vagalume.className = "vagalume";
    vagalume.style.left = Math.random() * 100 + "%";
    vagalume.style.top = 30 + Math.random() * 65 + "%";
    vagalume.style.setProperty("--dx", Math.random() * 80 - 40 + "px");
    vagalume.style.setProperty("--dy", Math.random() * -90 + "px");
    vagalume.style.setProperty("--dur", 6 + Math.random() * 6 + "s");
    vagalume.style.setProperty("--atraso", 2.5 + Math.random() * 6 + "s");
    caixa.appendChild(vagalume);
  }
}

// 5. Elementos que aparecem ao rolar a página
const itens = document.querySelectorAll("[data-revelar]");

if ("IntersectionObserver" in window && !reduzirMovimento) {
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  itens.forEach((item) => observador.observe(item));
} else {
  itens.forEach((item) => item.classList.add("visivel"));
}