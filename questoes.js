//Aplicação criada para armazenar questões e respostas téoricas de atividade de nivelamento Nodejs

//Aplicação do módulo "readline" da biblioteca do Node.js, configurada para interface ler entradas padrões e escrever na saida padrão, os questionamentos solicitados em forma de streams de entrada e saída no teminal
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Criação de objeto para armazenar perguntas e respostas.
const questionAndAnswer = {};


// Função para armazenar perguntas e respostas
function addQuestionAnswer(question, answer) {
  questionAndAnswer[question] = answer;
}

//Função para buscar uma resposta com relação a uma pergunta.
function searchAnswer(question) {
  return questionAndAnswer[question] || "Pedimos desculpas pelo ocorrido, mas ainda não possuímos o armazenamento destas informações em nosso sistema.";
}

// Função para ler as perguntas e respostas no arquivo .txt
function loadQuestionsAndAnswersFromFile() {
  const fileContent = fs.readFileSync('questions.txt', 'utf8');
  const lines = fileContent.split('\n\n'); // Para dividir o arquivo em pares de pergunta e resposta

  for (let i = 0; i < lines.length; i += 2) {
    const question = lines[i]?.trim();
    const answer = lines[i + 1]?.trim();
    addQuestionAnswer(question, answer);
  }
}

// Para carregarmos as perguntas e respostas do arquivo antes de iniciar a interação com o usuário
loadQuestionsAndAnswersFromFile();

// addQuestionAnswer("O que é NodeJS?", "É um ambiente de software livre de runtime do JavaScript do lado do servidor, onde podemos usá-lo para executar aplicativos e código JavaScript em muitos locais fora de um navegador, como em um servidor. É um wrapper(classes especiais que possuem métodos capazes de fazer conversões em variáveis primitivas e também de encapsular tipos primitivos para serem trabalhados como objetos) em um mecanismo JavaScript chamado V8 que ativa vários navegadores, incluindo o Google Chrome, o Opera e o Microsoft Edge. Podemos usar o Node.js para executar JavaScript usando o mecanismo V8 fora de um navegador, também contém muitas otimizações do V8 das quais os aplicativos em execução em um servidor podem precisar. Como exemplo, adicionar uma classe de Buffer que permite que o V8 funcione com arquivos.");

rl.question("Faça uma pergunta: ", (question) => {
  const answer = searchAnswer(question);
  console.log(answer);
  rl.close();
});