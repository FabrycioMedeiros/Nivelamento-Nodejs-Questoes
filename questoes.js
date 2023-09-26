//Aplicação criada para armazenar questões e respostas téoricas de atividade de nivelamento Nodejs
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Criação de objeto para armazenar perguntas e respostas.
const perguntasERespostas = {};


// Função para armazenar perguntas e respostas
function adicionarPerguntaResposta(pergunta, resposta) {
  perguntasERespostas[pergunta] = resposta;
}


//Função para buscar uma resposta com relação a uma pergunta.
function buscarResposta(pergunta) {
  return perguntasERespostas[pergunta] || "Desculpe, não sei a resposta para essa pergunta.";
}

adicionarPerguntaResposta("pergunta", "resposta");

rl.question("Faça uma pergunta: ", (pergunta) => {
  const resposta = buscarResposta(pergunta);
  console.log(resposta);
  rl.close();
});