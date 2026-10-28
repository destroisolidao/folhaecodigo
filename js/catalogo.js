// js/catalogo.js
// Monta a lista de anfíbios na página a partir de ANFIBIOS (data/anfibios.js).
// Ordem de carregamento no index.html: data/anfibios.js, js/catalogo.js, js/main.js.

(function () {
  const lista = document.getElementById("lista-anfibios");
  if (!lista || typeof ANFIBIOS === "undefined") return;

  function criar(tag, classe, texto) {
    const elemento = document.createElement(tag);
    if (classe) elemento.className = classe;
    if (texto) elemento.textContent = texto;
    return elemento;
  }

  // Pega o texto de um campo dos dados. Campo pendente ou ausente vira null.
  function valorDe(campo) {
    return campo && campo.valor ? campo.valor : null;
  }

  // Uma linha da ficha: rótulo + valor. Sem valor, mostra "a verificar".
  function linha(rotulo, valor) {
    const bloco = criar("div", "ficha__linha");
    bloco.appendChild(criar("dt", null, rotulo));
    bloco.appendChild(criar("dd", valor ? null : "pendente", valor || "a verificar"));
    return bloco;
  }

  function imagem(especie) {
    const caixa = criar("div", "especie__imagem");
    if (especie.imagem && especie.imagem.arquivo) {
      const foto = criar("img");
      foto.src = especie.imagem.arquivo;
      foto.alt = especie.nomeCientifico;
      foto.loading = "lazy";
      caixa.appendChild(foto);
      if (especie.imagem.credito) {
        caixa.appendChild(criar("p", "especie__credito", especie.imagem.credito));
      }
    } else {
      caixa.classList.add("especie__imagem--pendente");
      caixa.appendChild(criar("span", null, "Imagem pendente"));
    }
    return caixa;
  }

  // Ficha simplificada: só estes cinco itens aparecem para o visitante.
  // Os outros dados (localidade-tipo, referências etc.) continuam em data/anfibios.js.
  function ficha(especie) {
    const detalhes = criar("details", "ficha");
    detalhes.appendChild(criar("summary", null, "Ver ficha"));

    const corpo = criar("div", "ficha__corpo");
    const dados = criar("dl", "ficha__dados");

    dados.appendChild(linha("Nome original", especie.nomeOriginal));
    dados.appendChild(linha("Nome popular", valorDe(especie.nomePopular)));
    dados.appendChild(linha("Habitat", valorDe(especie.habitat)));
    dados.appendChild(linha("População", valorDe(especie.populacao)));
    dados.appendChild(linha("Status de conservação", valorDe(especie.conservacao)));

    corpo.appendChild(dados);
    detalhes.appendChild(corpo);
    return detalhes;
  }

  ANFIBIOS.forEach((especie) => {
    const item = criar("li", "especie");
    item.setAttribute("data-revelar", "");

    const texto = criar("div", "especie__texto");
    texto.appendChild(criar("h3", "especie__nome", especie.nomeCientifico));
    texto.appendChild(criar("p", "especie__autoria", especie.autoria));

    const descrita = especie.descritaPor === "Bertha Lutz";
    const classeSelo = "selo " + (descrita ? "selo--descrita" : "selo--homenagem");
    texto.appendChild(criar("p", classeSelo, especie.relacaoComBerthaLutz));

    texto.appendChild(criar("p", "especie__publicacao", "Publicação original: " + especie.publicacaoOriginal));
    texto.appendChild(ficha(especie));

    item.appendChild(imagem(especie));
    item.appendChild(texto);
    lista.appendChild(item);
  });
})();