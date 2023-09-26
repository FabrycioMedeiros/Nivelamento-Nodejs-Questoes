//Aplicação criada para armazenar questões e respostas téoricas de atividade de nivelamento Nodejs

//Aplicação do módulo "readline" da biblioteca do Node.js, configurada para interface ler entradas padrões e escrever na saida padrão, os questionamentos solicitados em forma de streams de entrada e saída no teminal
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
  return perguntasERespostas[pergunta] || "Pedimos desculpas pelo ocorrido, mas ainda não possuímos o armazenamento destas informações em nosso sistema.";
}

adicionarPerguntaResposta("pergunta", "resposta");

rl.question("Faça uma pergunta: ", (pergunta) => {
  const resposta = buscarResposta(pergunta);
  console.log(resposta);
  rl.close();
});