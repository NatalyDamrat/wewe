const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resutado");

const perguntas = [
  {
    enunciado: 
    alternativas: [
    {
      texto:
      afirmação:
    },
    {
      texto:
      afirmação:
    }
      
   ]
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if(atual >= perguntas.lenght){
    mostrarResultado();
    return;
  }
  perguntaAtual = perguntas(atual);
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas(){
  for(const alternativa of perguntaAtual.alternativa){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
  }
}

function respostaSelecionada(opcaoSelecionada){
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
  
  
