// definindo as voariaveis do jogo
let scoreboard = []; // criando um array para salvar os dados dos jogadores
let rounds = 1; // iniciando a variavel de rodadas
let turn = 2; // definindo quantos turnos haverão no jogo
const side = 6; // definindo até qual tamanho deve ser o sorteido dos valores
let partialPlayerOneValue;
let partialPlayerTwoValue;
let winer;

// Buscando o elemento body do html-
const body = document.getElementsByTagName("body");
// criando um titulo
const title = document.createElement("h1");
title.className = "title";
title.innerText = " Jogue os Dados 🎲🎲";
document.body.appendChild(title);

// criando um div para organizar os elementos sem o titulo
const frame = document.createElement("div");
frame.className = "frame";
document.body.appendChild(frame);

// criando uma div para organizar os elementos
const game = document.createElement("div");
game.classList = "game";
frame.appendChild(game);

// criando a div principal do jogo que mostra os dados
const main = document.createElement("div");
main.className = "pronpt";
game.appendChild(main);

// criando uma div para armazenar a tabela com os resultados
const divTable = document.createElement("div");
divTable.className = "divTable";
frame.appendChild(divTable);

// create the modal container
const modalContainer = document.createElement("div");
modalContainer.classList.add("modal-container");

// create the modal content
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");

// create the title and message elements
const modalTitle = document.createElement("h2");
const modalMessage = document.createElement("p");

// create the button to close the modal
const closeButton = document.createElement("button");
closeButton.classList.add("modal-close");
closeButton.textContent = "FECHAR";

// add event listener to close button to remove the modal from the DOM when clicked
closeButton.addEventListener("click", () => {
  modalContainer.remove();
});

const showModal = (title, message) => {
  modalTitle.textContent = title;
  modalMessage.textContent = message;

  // add the title, message, and close button to the modal content
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalMessage);
  modalContent.appendChild(closeButton);

  // add the modal content to the modal container
  modalContainer.appendChild(modalContent);

  // add the modal container to the document body
  frame.appendChild(modalContainer);
};

// criando a tabela de resultados
const resultTable = document.createElement("table");

// cabeçalho e corpo da tabela
const resulTableHead = document.createElement("thead");
const resulTableBody = document.createElement("tbody");

// coluna do cabeçalho
const resulTableHeadTr = document.createElement("tr"); // Coluna de Resultado

// linhas do cabeçalho
const resulTableHeadTh = document.createElement("th");
resulTableHeadTh.innerText = "Resultado";
const resulTableHeadThWinner = document.createElement("th");
resulTableHeadThWinner.innerText = "Vencedor";
const resulTableHeadThTurn = document.createElement("th");
resulTableHeadThTurn.innerText = "Rodada";

divTable.appendChild(resultTable);
resultTable.appendChild(resulTableHead);
resultTable.appendChild(resulTableBody);
resulTableHead.appendChild(resulTableHeadTr);
resulTableHeadTr.appendChild(resulTableHeadTh);
resulTableHeadTr.appendChild(resulTableHeadThWinner);
resulTableHeadTr.appendChild(resulTableHeadThTurn);

// criando os lados dos dois dados
// lado 1
const outputPlayerOne = document.createElement("div");
const socrePlayerOne = document.createElement("p");
socrePlayerOne.innerHTML = "0";
outputPlayerOne.className = "player-one";
main.appendChild(outputPlayerOne);
socrePlayerOne.className = "sort-text";
// lado 2
const outputPlayerTwo = document.createElement("div");
const socrePlayerTwo = document.createElement("p");
socrePlayerTwo.innerHTML = "0";
outputPlayerTwo.className = "player-two";
main.appendChild(outputPlayerTwo);
socrePlayerTwo.className = "sort-text";

// criando os botões do jogo
// botão do player 1
const hndButtonPlayerOne = document.createElement("button");
hndButtonPlayerOne.innerText = "Jogador 1";
hndButtonPlayerOne.className = "button";

// botão de reiniciar
const hndButtonRestart = document.createElement("button");
hndButtonRestart.innerText = "Reinicar o Jogo";
hndButtonRestart.className = "button";

// botão do player 2
const hndButtonPlayerTwo = document.createElement("button");
hndButtonPlayerTwo.innerText = "Jogador 2";
hndButtonPlayerTwo.className = "button";

// criando a div que adiciona os botões em um unico form
const control = document.createElement("div");
control.id = "control";
control.appendChild(hndButtonPlayerOne);
control.appendChild(hndButtonRestart);
control.appendChild(hndButtonPlayerTwo);
document.body.appendChild(control);
game.appendChild(control);

// desabilitando os botões de player 2 e restart
hndButtonPlayerTwo.disabled = true;
hndButtonRestart.disabled = true;

// função para criar uma nova linha na tabela a partir do fim do turno
const newTableLine = (scoreboard) => {
  resulTableBody.innerHTML = ""; // remove todas as linhas existentes da tabela antes de recriá-las
  for (let i = 0; i < scoreboard.length + 1; i++) {
    const round = document.createTextNode(scoreboard[i].round);
    const winer = scoreboard[i].winer.toString(); // converter para string
    const side_player_one = document.createTextNode(
      scoreboard[i].side_player_one
    );
    const side_player_two = document.createTextNode(
      scoreboard[i].side_player_two
    );
    let winerRegex;

    if (winer === "1") {
      winerRegex = document.createTextNode("Jogador 1");
    } else if (winer === "2") {
      winerRegex = document.createTextNode("Jogador 2");
    } else if (winer === "0") {
      winerRegex = document.createTextNode("Empate");
    }

    // criando as linhas da tabela
    const trBody = document.createElement("tr");
    const lineRound = document.createElement("td");
    const lineWinner = document.createElement("td");
    const lineResult = document.createElement("td");

    // atribuindo o valor de cada item a tabela
    const resultText = `${side_player_one.textContent} X ${side_player_two.textContent}`;
    const resultSpan = document.createElement("span");
    resultSpan.appendChild(document.createTextNode(resultText));

    lineResult.appendChild(resultSpan);
    lineWinner.appendChild(winerRegex);
    lineRound.appendChild(round);

    trBody.appendChild(lineResult);
    trBody.appendChild(lineWinner);
    trBody.appendChild(lineRound);

    resulTableBody.appendChild(trBody);
  }
};

// função de sortear o dado 1
const sortDieOne = () => {
  let sort = Math.floor(Math.random() * side) + 1;
  socrePlayerOne.innerText = sort;
  outputPlayerOne.appendChild(socrePlayerOne);
  hndButtonPlayerOne.disabled = true;
  hndButtonRestart.disabled = false;
  hndButtonPlayerTwo.disabled = false;
  partialPlayerOneValue = sort;
  turn--;
};

// função de sortear o dado 2
const sortDieTwo = () => {
  let sort = Math.floor(Math.random() * side) + 1;
  socrePlayerTwo.innerText = sort;
  outputPlayerTwo.appendChild(socrePlayerTwo);
  hndButtonPlayerOne.disabled = false;
  hndButtonPlayerTwo.disabled = true;
  partialPlayerTwoValue = sort;
  turn--;
  partialResult(partialPlayerOneValue, partialPlayerTwoValue);
};

// função de reiniciar o jogo
const restart = () => {
  socrePlayerOne.innerText = "0";
  socrePlayerTwo.innerText = "0";
  hndButtonRestart.disabled = true;
  hndButtonPlayerTwo.disabled = true;
  hndButtonPlayerOne.disabled = false;
  partialPlayerOneValue = 0;
  partialPlayerTwoValue = 0;
  turn = 2;
  scoreboard = [];
  rounds = 1;
  resulTableBody.innerHTML = "";
};

const newTurn = () => {
  rounds = rounds + 1;
  // console.log(scoreboard);
  socrePlayerOne.innerText = "0";
  socrePlayerTwo.innerText = "0";
  hndButtonRestart.disabled = false;
  hndButtonPlayerTwo.disabled = true;
  hndButtonPlayerOne.disabled = false;
  partialPlayerOneValue = 0;
  partialPlayerTwoValue = 0;
  turn = 2;
  newTableLine(scoreboard);
};

// função que compara os resultados parciais
const partialResult = (valueOne, valueTwo) => {
  // Condição para saber a vitória ou empate
  if (turn == 0) {
    if (valueOne > valueTwo) {
      if (rounds < 11) {
        hndButtonRestart.disabled = true;
        hndButtonPlayerTwo.disabled = true;
        hndButtonPlayerOne.disabled = true;
        winer = 1;
        setTimeout(() => {
          showModal("Vitória", `Jogador 1 venceu a rodada ${rounds}`);

          if (rounds == 10) {
            setTimeout(() => finalResult(), 2000);
          } else {
            newTurn();
          }
        }, 700);
      }
    } else if (valueOne < valueTwo) {
      if (rounds < 11) {
        hndButtonRestart.disabled = true;
        hndButtonPlayerTwo.disabled = true;
        hndButtonPlayerOne.disabled = true;
        winer = 2;
        setTimeout(() => {
          showModal("Vitória", `Jogador 2 venceu a rodada ${rounds}`);

          if (rounds == 10) {
            setTimeout(() => finalResult(), 2000);
          } else {
            newTurn();
          }
        }, 700);
      }
    } else {
      if (rounds < 11) {
        hndButtonRestart.disabled = true;
        hndButtonPlayerTwo.disabled = true;
        hndButtonPlayerOne.disabled = true;
        winer = 0;
        setTimeout(() => {
          showModal("Empate !", `Ambos venceram a rodada ${rounds}`);

          if (rounds == 10) {
            setTimeout(() => finalResult(), 2000);
          } else {
            newTurn();
          }
        }, 700);
      }
    }
    // objeto que define os dados da rodada no array do resultado final
    const roundStats = {
      round: rounds,
      winer: winer,
      side_player_one: partialPlayerOneValue,
      side_player_two: partialPlayerTwoValue,
    };
    // mandando o objeto para dentro do array
    scoreboard.push(roundStats);
  }
};
// função que compara o resultado total do jogo
const finalResult = () => {
  // calculando a pontuação total dos jogadores
  let totalScorePlayerOne = 0;
  let totalScorePlayerTwo = 0;

  for (let i = 0; i < scoreboard.length; i++) {
    if (scoreboard[i].winer === 1) {
      totalScorePlayerOne++;
    } else if (scoreboard[i].winer === 2) {
      totalScorePlayerTwo++;
    }
  }
  // Declarando o vencedor final
  if (totalScorePlayerOne > totalScorePlayerTwo) {
    showModal(
      "Vitória",
      `Jogador 1 venceu o jogo com ${totalScorePlayerOne} rounds ganhos.`
    );
  } else if (totalScorePlayerOne < totalScorePlayerTwo) {
    showModal(
      "Vitória",
      `Jogador 2 venceu o jogo com ${totalScorePlayerTwo} rounds ganhos.`
    );
  } else {
    showModal(
      "Empate   ",
      `O jogo terminou em empate com ${totalScorePlayerOne} rounds ganhos para cada jogador.`
    );
  }
  setInterval(() => restart(), 1000 * 5);
};
// Atribuindo as funções aos botões
hndButtonPlayerTwo.onclick = sortDieTwo;
hndButtonPlayerOne.onclick = sortDieOne;
hndButtonRestart.onclick = restart;
