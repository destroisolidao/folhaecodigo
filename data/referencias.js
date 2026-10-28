// js/referencias.js
// Monta a seção Referências a partir de ANFIBIOS (data/anfibios.js)
// e de REFERENCIAS_EXTRAS (data/referencias.js).
// Ordem no index.html: data/anfibios.js, data/referencias.js, js/catalogo.js,
// js/referencias.js, js/main.js.

(function () {
  const caixa = document.getElementById("lista-referencias");
  if (!caixa || typeof ANFIBIOS === "undefined") return;

  const extras = typeof REFERENCIAS_EXTRAS !== "undefined" ? REFERENCIAS_EXTRAS : {};

  function criar(tag, classe, texto) {
    const elemento = document.createElement(tag);
    if (classe) elemento.className = classe;
    if (texto) elemento.textContent = texto;
    return elemento;
  }

  // Um item da lista: tipo (pequeno), citação e link
  function item(ref) {
    const li = criar("li");
    if (ref.tipo) li.appendChild(criar("span", "ref__tipo", ref.tipo));
    li.appendChild(document.createTextNode(ref.citacao + " "));
    if (ref.link) {
      const a = criar("a", null, "Abrir fonte");
      a.href = ref.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
    } else if (ref.link === null) {
      li.appendChild(criar("span", "pendente", "link não localizado"));
    }
    return li;
  }

  // Um grupo: título à esquerda, lista de fontes à direita
  function grupo(titulo, itens, classeTitulo) {
    if (!itens || !itens.length) return;
    const bloco = criar("div", "grupo");
    bloco.setAttribute("data-revelar", "");
    bloco.appendChild(criar("h3", classeTitulo, titulo));
    const lista = criar("ul");
    itens.forEach((ref) => lista.appendChild(item(ref)));
    bloco.appendChild(lista);
    caixa.appendChild(bloco);
  }

  // 1. Uma lista para cada espécie do catálogo
  ANFIBIOS.forEach((especie) => grupo(especie.nomeCientifico, especie.referencias, "grupo__especie"));

  // 2. Fontes sobre as cientistas
  grupo("Mulheres na ciência", extras.mulheres);

  // 3. Créditos das imagens: fotos dos anfíbios (automático) + as extras
  const creditos = [];
  ANFIBIOS.forEach((especie) => {
    const imagem = especie.imagem;
    if (imagem && imagem.arquivo && imagem.credito) {
      creditos.push({ citacao: especie.nomeCientifico + ": " + imagem.credito, link: imagem.fonte || undefined });
    }
  });
  (extras.imagens || []).forEach((credito) => creditos.push(credito));
  grupo("Créditos das imagens", creditos);
})();