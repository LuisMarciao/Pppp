const pontos = [
    {
      nome: "Estação das Docas",
      descricao: "Localizada às margens da Baía do Guajará, a Estação das Docas é um dos cartões-postais de Belém. O complexo revitalizou antigos armazéns portuários e hoje abriga restaurantes renomados, bares, cafeterias, lojas de artesanato e um teatro. É o local ideal para apreciar o pôr do sol enquanto prova a tradicional cerveja paraense ou um sorvete de frutas amazônicas. Além disso, o espaço é palco de apresentações culturais e feiras temáticas."
    },
    {
      nome: "Ver-o-Peso",
      descricao: "O Ver-o-Peso é o mercado mais tradicional e emblemático de Belém, funcionando desde o século XVII. Considerado um patrimônio cultural do Brasil, o complexo inclui o Mercado de Peixe, barracas de ervas medicinais, especiarias, frutas regionais e comidas típicas como o açaí e o tacacá. É um passeio obrigatório para quem deseja vivenciar o cotidiano paraense, com suas cores, aromas e sabores únicos."
    },
    {
      nome: "Mangal das Garças",
      descricao: "Um refúgio natural no coração de Belém, o Mangal das Garças combina natureza e cultura em um só lugar. O parque ecológico conta com viveiros de aves, borboletário, trilhas, lago com igarapé, restaurante regional e o Farol de Belém, de onde se tem uma vista panorâmica da cidade. Ideal para passeios em família, observação de pássaros e para conhecer mais da fauna e flora amazônicas em meio a uma bela área verde."
    },
    {
      nome: "Basílica de Nossa Senhora de Nazaré",
      descricao: "A Basílica de Nossa Senhora de Nazaré é um dos principais templos católicos do Brasil e o centro das festividades do Círio de Nazaré, uma das maiores romarias do mundo. Com sua arquitetura neogótica, a basílica abriga a imagem da padroeira do Pará e é um local de grande devoção para os fiéis. A visita à basílica é uma oportunidade de conhecer mais sobre a cultura religiosa paraense e apreciar a beleza do altar e dos vitrais."
    },
    {
      nome: "Teatro da Paz",
      descricao: "Inaugurado em 1878, o Teatro da Paz é um dos mais importantes teatros do Brasil e um ícone da arquitetura neoclássica em Belém. O teatro foi construído com materiais nobres, como mármore italiano e madeira de lei, e abriga uma rica programação cultural, incluindo óperas, concertos e peças teatrais. A visita ao teatro é uma oportunidade de conhecer sua história e apreciar a beleza de seu interior, com detalhes em ouro e lustres de cristal."
    },
    
    {
      nome: "Forte do Presépio",
      descricao: "O Forte do Presépio, também conhecido como Forte do Castelo, é um dos marcos históricos de Belém. Construído no século XVII, o forte foi erguido para proteger a cidade de invasões e hoje abriga o Museu Histórico do Pará. O local oferece uma vista privilegiada da Baía do Guajará e é um ótimo ponto para conhecer mais sobre a história da cidade e da colonização portuguesa na Amazônia."
    }
  ];
  
  const listaPontos = document.getElementById("lista-pontos");
  const detalhes = document.getElementById("detalhes");
  
  pontos.forEach((ponto, index) => {
    const li = document.createElement("li");
    li.textContent = ponto.nome;
    li.addEventListener("click", () => mostrarDetalhes(index));
    listaPontos.appendChild(li);
  });
  
  function mostrarDetalhes(index) {
    detalhes.style.display = "block";
    detalhes.innerHTML = `
      <h3>${pontos[index].nome}</h3>
      <p>${pontos[index].descricao}</p>
    `;
  }
  