const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Qual dos seguintes gases é conhecido por contribuir significativamente para o aquecimento global?",
        alternativas:[
            "Oxigênio",
            "Dióxido de carbono",
        ]
    },
    {
        enunciado: "Qual das opções a seguir é uma fonte de energia renovável?",
        alternativas: [
            " Carvão",
            "Energia solar",
        ]
    },
    {
        enunciado: "Qual das opções abaixo é uma prática sustentável para conservação de água?",
        alternativas: [
            " Desperdiçar água sempre que possível",
            "Coletar água da chuva para reutilização"
        ]
    },
    {
        enunciado: "Qual das seguintes ações contribui positivamente para a preservação da biodiversidade?",
        alternativas: [
            "Desmatamento indiscriminado",
            " Criação de reservas naturais"
        ]
    },
    {
        enunciado: "Qual das alternativas a seguir representa um impacto negativo da poluição do ar?",
        alternativas: [
           " Melhoria na qualidade do ar",
            "Problemas respiratórios em humanos e animais"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();