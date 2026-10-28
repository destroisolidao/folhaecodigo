/* ==========================================================
   data/anfibios.js | Catálogo de anfíbios, MOCATEC 2026

   Regras deste arquivo:
   1. Só entra dado que tenha fonte. Sem fonte, o campo fica pendente.
   2. Campo pendente = { valor: null, status: "a verificar", nota: "..." }.
   3. Status de conservação só é preenchido depois de conferir a
      categoria e a data da avaliação direto na IUCN (iucnredlist.org).
   4. Taxonomia e autoria: Amphibian Species of the World (ASW),
      consultado em 27/10/2026.
   5. Links com tipo "conservação (a conferir)" são endereços para
      consulta. O conteúdo deles ainda não foi verificado.

   O que a ficha do site mostra: nomeOriginal, nomePopular, habitat,
   populacao e conservacao. Os demais campos ficam guardados aqui como
   registro e para a futura seção de Referências.
   ========================================================== */

function pendente(nota) {
  return { valor: null, status: "a verificar", nota: nota };
}

function imagemPendente() {
  return { arquivo: null, status: "pendente", credito: null, licenca: null, fonte: null };
}

const NOTA_SEM_FONTE = "Ainda sem fonte verificada.";
const NOTA_CONSERVACAO =
  "Não usar avaliações antigas. Conferir a categoria e a data da avaliação na IUCN e na lista nacional antes de publicar.";

const ANFIBIOS = [
  /* ---------- 1. Aplastodiscus musicus ---------- */
  {
    id: "aplastodiscus-musicus",
    nomeCientifico: "Aplastodiscus musicus",
    autoria: "(Lutz, 1949)",
    anoDescricao: 1949,
    observacaoBibliografica:
      "A referência taxonômica (ASW) registra 1949 e indica “1948” entre aspas. Citação registrada: Hyla musica Lutz, 1949 “1948”, Mem. Oswaldo Cruz, Rio de Janeiro, 46: 565.",
    nomeOriginal: "Hyla musica",
    descritaPor: "Bertha Lutz",
    relacaoComBerthaLutz: "Descrita por Bertha Lutz.",
    publicacaoOriginal: "Memórias do Instituto Oswaldo Cruz, 46: 565",
    nomePopular:{
  valor: "Perereca Buzina",
  status: "confirmado",
  fonte: "https://www.facebook.com/labanfibiosufrj/videos/o-canto-de-aplastodiscus-musicus/602498930603426/"
},
  habitat: {
  valor: "Florestas montanas úmidas subtropicais ou tropicais e rios.",
  status: "confirmado",
  fonte: "https://en.wikipedia.org/wiki/Aplastodiscus_musicus"
},
    populacao: {
  valor: "A tendência e o tamanho populacional dessa espécie são classificados como desconhecidos devido à extrema escassez de dados",
  status: "confirmado",
  fonte: "ICMBio, consultada em 27/10/2026."
},
    conservacao: {
  valor: "Como a maioria dos anfíbios da Mata Atlântica, sofre potenciais pressões com a perda e fragmentação de habitat",
  status: "confirmado",
  fonte: "ICMBio, consultada em 27/10/2026."
},
   imagem: {
  arquivo: "images/anfibios/aplastodiscusmusicus.jpeg",
  status: "confirmado",
  credito: "Foto: UNIRIO",
  licenca: "?",
  fonte: "https://www.unirio.br/arquivos/geral/musicus1.jpg/view"
},
    referencias: [
      {
        tipo: "taxonomia",
        citacao:
          "Amphibian Species of the World: an Online Reference. American Museum of Natural History. Aplastodiscus musicus. Consultado em 27/10/2026.",
        link: "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Hylidae/Aplastodiscus/Aplastodiscus-musicus"
      },
      {
        tipo: "conservação",
        citacao: "IUCN Red List of Threatened Species: Aplastodiscus musicus. Verificar categoria e data da avaliação.",
        link: "https://www.iucnredlist.org/species/55572/11319411"
      }
    ]
  },

  /* ---------- 2. Ischnocnema venancioi ---------- */
  {
    id: "ischnocnema-venancioi",
    nomeCientifico: "Ischnocnema venancioi",
    autoria: "(Lutz, 1958)",
    anoDescricao: 1958,
    observacaoBibliografica: null,
    nomeOriginal: "Eleutherodactylus venancioi",
    descritaPor: "Bertha Lutz",
    relacaoComBerthaLutz: "Descrita por Bertha Lutz.",
    publicacaoOriginal:
      "Memórias do Instituto Oswaldo Cruz, v. 56, n. 2, 1958 (“Anfíbios novos e raros das Serras Costeiras do Brasil”)",
    nomePopular:{
  valor: "Venancio's Robber Frog (rã-assaltante-de-venâncio)",
  status: "confirmado",
  fonte: "GBIF, consultada em 27/10/2026."
},
    habitat:{
  valor: "Florestas tropicais ou subtropicais húmidas de baixa altitude e florestas montanas húmidas (da Mata Atlântica)",
  status: "confirmado",
  fonte: "Wikipedia, consultada em 27/10/2026."
},
    populacao:{
  valor: "é atualmente classificada como estável pela Lista Vermelha da IUCN",
  status: "confirmado",
  fonte: "IUCN Red List, página da espécie, consultada em 27/10/2026."
},
    conservacao:{
  valor: "é classificado como Pouco Preocupante (LC - Least Concern) pela Lista Vermelha da IUCN",
  status: "confirmado",
  fonte: "IUCN Red List, página da espécie, consultada em 27/10/2026."
},
    imagem: {
  arquivo: "images/anfibios/isochnocenemavenancioi.jpg",
  status: "confirmado",
  credito: "Foto: Inaturalist",
  licenca: "?",
  fonte: "https://www.inaturalist.org/pt/taxa/23048-Ischnocnema"
},
    referencias: [
      {
        tipo: "taxonomia",
        citacao:
          "Amphibian Species of the World: an Online Reference. American Museum of Natural History. Ischnocnema venancioi. Consultado em 27/10/2026.",
        link: "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Brachycephaloidea/Brachycephalidae/Ischnocnema/Ischnocnema-venancioi"
      },
      {
        tipo: "publicação original",
        citacao:
          "LUTZ, B. Anfíbios novos e raros das Serras Costeiras do Brasil. Memórias do Instituto Oswaldo Cruz, Rio de Janeiro, v. 56, n. 2, 1958. Registro no repositório Arca (Fiocruz).",
        link: "https://www.arca.fiocruz.br/handle/icict/53771"
      },
      {
        tipo: "conservação",
        citacao: "IUCN Red List of Threatened Species: Ischnocnema venancioi. Verificar categoria e data da avaliação.",
        link: "https://www.iucnredlist.org/species/57033/11571923"
      }
    ]
  },

  /* ---------- 3. Dendropsophus berthalutzae ---------- */
  {
    id: "dendropsophus-berthalutzae",
    nomeCientifico: "Dendropsophus berthalutzae",
    autoria: "(Bokermann, 1962)",
    anoDescricao: 1962,
    observacaoBibliografica: null,
    nomeOriginal: "Hyla berthalutzae",
    descritaPor: "Bokermann",
    relacaoComBerthaLutz: "Nome em homenagem a Bertha Lutz. Não foi descrita por ela.",
    notaHomenagem:
      "A informação de que o nome é uma homenagem aparece na Wikipédia, que cita Beolens et al. (2013). Consultar essa obra antes de tratá-la como confirmada.",
    publicacaoOriginal: "Neotropica, 8: 84",
    localidadeTipo: {
      valor: "Paranapiacaba, Santo André (SP)",
      status: "confirmado",
      fonte: "Forti, Martins e Bertoluci (2012), que cita a descrição original de Bokermann (1962)."
    },
    nomePopular: {
  valor: "pererequinha-da-restinga",
  status: "confirmado",
  fonte: "Wikipédia, consultada em 27/10/2026."
},
    habitat:{
  valor: "Florestas tropicais da Mata Atlântica, planícies costeiras e encostas da Serra do Mar no sudeste do Brasil.",
  status: "confirmado",
  fonte: "Wikipédia, consultada em 27/10/2026."
},
    populacao: {
  valor: "Possui uma população endêmica do sudeste e sul do Brasil",
  status: "confirmado",
  fonte: "Instituto ra-bugio, consultada em 27/10/2026."
},
    conservacao: {
  valor: "Classificada oficialmente pela IUCN como de Pouco Preocupante (Least Concern) em termos globais de extinção.",
  status: "confirmado",
  fonte: "Instituto ra-bugio, consultada em 27/10/2026."
},
   imagem: {
  arquivo: "images/anfibios/pererequinhadarestinga.jpg",
  status: "confirmado",
  credito: "Foto: Pinterest",
  licenca: "?",
  fonte: "https://br.pinterest.com/pin/346917977552249067/"
},
    referencias: [
      {
        tipo: "taxonomia",
        citacao:
          "Amphibian Species of the World: an Online Reference. American Museum of Natural History. Dendropsophus berthalutzae. Consultado em 27/10/2026.",
        link: "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Hylidae/Dendropsophus/Dendropsophus-berthalutzae"
      },
      {
        tipo: "estudo científico",
        citacao:
          "FORTI, L. R.; MARTINS, F. A. M.; BERTOLUCI, J. Advertisement call and geographical variation in call features of Dendropsophus berthalutzae (Anura: Hylidae) from the Atlantic Rainforest of southeastern Brazil. Zootaxa, 3310: 66–68, 2012.",
        link: "https://www.mapress.com/zootaxa/2012/f/z03310p068f.pdf"
      },
      {
        tipo: "fonte secundária",
        citacao:
          "Wikipédia: Dendropsophus berthalutzae. Usada só para localizar a referência Beolens et al. (2013), sobre o nome em homenagem.",
        link: "https://en.wikipedia.org/wiki/Dendropsophus_berthalutzae"
      },
      {
        tipo: "conservação",
        citacao: "IUCN Red List of Threatened Species: Dendropsophus berthalutzae. Verificar categoria e data da avaliação.",
        link: "https://www.iucnredlist.org/species/55408/11302549"
      }
    ]
  },

  /* ---------- 4. Holoaden bradei ---------- */
  {
    id: "holoaden-bradei",
    nomeCientifico: "Holoaden bradei",
    autoria: "Lutz, 1958",
    anoDescricao: 1958,
    observacaoBibliografica: null,
    nomeOriginal: "Holoaden bradei",
    descritaPor: "Bertha Lutz",
    relacaoComBerthaLutz: "Descrita por Bertha Lutz.",
    publicacaoOriginal: "Memórias do Instituto Oswaldo Cruz, 56: 383",
    localidadeTipo: {
      valor: "“Alto Itatiaia”",
      status: "confirmado",
      fonte: "Amphibian Species of the World."
    },
    hipoteseExtincao: {
      texto:
        "Martinelli e Toledo (2016) sugeriram, em estudo publicado, que a espécie está extinta. Isso é uma hipótese científica e não uma confirmação oficial de extinção.",
      status: "hipótese publicada",
      fonte: "Amphibian Species of the World, que cita Martinelli e Toledo (2016), Zootaxa 4184: 383–385."
    },
    nomePopular: {
  valor: "rã-do-deserto-de-itatiaia, rãzinha-verrugosa-da-serra-de-brade ou simplesmente sapinho.",
  status: "confirmado",
  fonte: "Wikipedia, consultada em 27/10/2026."
},
    habitat: {
  valor: "Exclusivamente no Alto Itatiaia, na Serra da Mantiqueira (fronteira entre os estados de Minas Gerais e Rio de Janeiro).",
  status: "confirmado",
  fonte: "Wikipedia, consultada em 27/10/2026."
},
    populacao: {
  valor: "Estimativas apontam cerca de 49 indivíduos",
  status: "confirmado",
  fonte: "ResearchGate, consultada em 27/10/2026."
},
    conservacao: {
  valor: "Não há registros confirmados da espécie na natureza desde a década de 1980, havendo suspeitas de que possa estar extinta na natureza",
  status: "confirmado",
  fonte: "Wikipedia, consultada em 27/10/2026."
},
   imagem: {
  arquivo: "images/anfibios/holoaden.jpeg",
  status: "confirmado",
  credito: "Foto: Wikipédia",
  licenca: "?",
  fonte: "https://pt.wikipedia.org/wiki/R%C3%A3zinha-verrugosa-da-serra-de-luederwaldt"
},
    referencias: [
      {
        tipo: "taxonomia",
        citacao:
          "Amphibian Species of the World: an Online Reference. American Museum of Natural History. Holoaden bradei. Consultado em 27/10/2026.",
        link: "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Brachycephaloidea/Craugastoridae/Holoadeninae/Holoaden/Holoaden-bradei"
      },
      {
        tipo: "publicação original",
        citacao:
          "LUTZ, B. Anfíbios novos e raros das Serras Costeiras do Brasil. Memórias do Instituto Oswaldo Cruz, Rio de Janeiro, v. 56, n. 2, 1958. Registro no repositório Arca (Fiocruz).",
        link: "https://www.arca.fiocruz.br/handle/icict/53771"
      },
      {
        tipo: "estudo científico",
        citacao:
          "MARTINELLI, A.; TOLEDO, L. F. The last scream: the distress call of a probably extinct Brazilian anuran (Holoaden bradei Lutz, 1958). Zootaxa, 4184(2): 383–385, 2016. Citado pela ASW; link direto ainda não localizado.",
        link: null
      },
      {
        tipo: "conservação",
        citacao: "IUCN Red List of Threatened Species: Holoaden bradei. Verificar categoria e data da avaliação.",
        link: "https://www.iucnredlist.org/species/10215/3183473"
      }
    ]
  },

  /* ---------- 5. Pithecopus ayeaye ---------- */
  {
    id: "pithecopus-ayeaye",
    nomeCientifico: "Pithecopus ayeaye",
    autoria: "Lutz, 1966",
    anoDescricao: 1966,
    observacaoBibliografica: null,
    nomeOriginal: "Pithecopus ayeaye",
    notaTaxonomica:
      "Phyllomedusa itacolomi Caramaschi, Cruz & Feio, 2006 é sinônimo júnior desta espécie, segundo Baêta et al. (2009), citado pela ASW.",
    descritaPor: "Bertha Lutz",
    relacaoComBerthaLutz: "Descrita por Bertha Lutz.",
    publicacaoOriginal: "Copeia, 1966: 236",
    localidadeTipo: {
      valor: "Morro do Ferro, Poços de Caldas (MG)",
      status: "confirmado",
      fonte: "Amphibian Species of the World."
    },
    nomePopular: {
  valor: "Rã-folha-reticulada ou Perereca-macaco",
  status: "confirmado",
  fonte: "Wikipedia, consultada em 27/10/2026."
},
    habitat: {
  valor: " Vive na zona de transição entre o Cerrado (savana tropical) e a Mata Atlântica semidecídua",
  status: "confirmado",
  fonte: "Wikipedia, consultada em 27/10/2026."
},
    populacao: {
  valor: "Não há um número total exato de indivíduos publicado para toda a espécie, mas é caracterizada por densidades baixas",
  status: "confirmado",
  fonte: "AmphibiaWeb, consultada em 27/10/2026."
},
    conservacao: {
  valor: "Está classificada como Criticamente Ameaçada (CR) de extinção.",
  status: "confirmado",
  fonte: "IUCN Red List, consultada em 27/10/2026."
},
    imagem: {
  arquivo: "images/anfibios/ayeaye.jpg",
  status: "confirmado",
  credito: "Foto: IFSULDEMINAS",
  licenca: "?",
  fonte: "https://portal.pcs.ifsuldeminas.edu.br/todas-noticias/2867-perereca-da-folhagem"
},
    referencias: [
      {
        tipo: "taxonomia",
        citacao:
          "Amphibian Species of the World: an Online Reference. American Museum of Natural History. Pithecopus ayeaye. Consultado em 27/10/2026.",
        link: "https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Pithecopus/Pithecopus-ayeaye"
      },
      {
        tipo: "publicação original",
        citacao:
          "LUTZ, B. Pithecopus ayeaye, a new Brazilian hylid with vertical pupils and grasping feet. Copeia, 1966: 236–240.",
        link: "https://doi.org/10.2307/1441130"
      },
      {
        tipo: "estudo científico",
        citacao:
          "Baêta, Caramaschi, Cruz e Pombal (2009). Phyllomedusa itacolomi Caramaschi, Cruz & Feio, 2006, a junior synonym of Phyllomedusa ayeaye (B. Lutz, 1966) (Hylidae, Phyllomedusinae). Zootaxa, 2226: 58–65.",
        link: "https://mapress.com/zt/article/view/6946"
      },
      {
        tipo: "conservação",
        citacao: "IUCN Red List of Threatened Species: Pithecopus ayeaye.",
        link: "https://www.iucnredlist.org/species/88417239/107296013"
      }
    ]
  }
];