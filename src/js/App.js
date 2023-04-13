// definindo as voariaveis do jogo 
let scoreboard = []; // criando um array para salvar os dados dos jogadores
let rounds = 1; // criando a quantidade de rounds 
let turn = 2; // definindo quantos turnos haverão no jogo
const side = 6; // definindo até qual tamanho deve ser o sorteido dos valores
let partialPlayerOneValue;
let partialPlayerTwoValue;
let winer;

// Buscando o elemento body do html-
const body = document.getElementsByTagName("body");

// criando uma div para organizar os elementos
const game = document.createElement("div");
game.classList = "game"
document.body.appendChild(game)

// criando a div principal do jogo que mostra os dados
const main = document.createElement("div");
main.className = "pronpt";
game.appendChild(main)

// criando uma div para armazenar a tabela com os resultados
const divTable = document.createElement("div");
document.body.appendChild(divTable);

// criando a tabela de resultados
const resultTable = document.createElement("table");
const resultaTableHead = document.createElement("thead");
const resultaTableBody = document.createElement("tbody");
const resultaTableHeadTr = document.createElement("tr");
divTable.appendChild(resultTable);
resultTable.appendChild(resultaTableHead);
resultTable.appendChild(resultaTableBody);
resultaTableHead.appendChild(resultaTableHeadTr)
resultaTableBody.appendChild(resultaTableHeadTr)


// criando os lados dos dois dados 
// lado 1
const outputPlayerOne = document.createElement("div");
const socrePlayerOne = document.createElement("p");
socrePlayerOne.innerHTML = "0";
outputPlayerOne.className = "player-one";
main.appendChild(outputPlayerOne);
socrePlayerOne.className = "sort-text"
// lado 2
const outputPlayerTwo = document.createElement("div");
const socrePlayerTwo = document.createElement("p");
socrePlayerTwo.innerHTML = "0";
outputPlayerTwo.className = "player-two";
main.appendChild(outputPlayerTwo);
socrePlayerTwo.className = "sort-text"

// criando os botões do jogo
// botão do player 1
const hndButtonPlayerOne = document.createElement("button");
hndButtonPlayerOne.innerText = "Jogador 1";
hndButtonPlayerOne.className = "button"


// botão de reiniciar
const hndButtonRestart = document.createElement("button");
hndButtonRestart.innerText = "Reinicar o Jogo";
hndButtonRestart.className = "button"


// botão do player 2
const hndButtonPlayerTwo = document.createElement("button");
hndButtonPlayerTwo.innerText = "Jogador 2";
hndButtonPlayerTwo.className = "button"

// criando a div que adiciona os botões em um unico form
const control = document.createElement("div");
control.id = "control";
control.appendChild(hndButtonPlayerOne);
control.appendChild(hndButtonRestart);
control.appendChild(hndButtonPlayerTwo);
document.body.appendChild(control);
game.appendChild(control)

// desabilitando os botões de player 2 e restart
hndButtonPlayerTwo.disabled = true;
hndButtonRestart.disabled = true;

// função de sortear o dado 1
const sortDieOne = () =>{
    let sort = Math.floor(Math.random()*side)+1;
    socrePlayerOne.innerText = sort;
    outputPlayerOne.appendChild(socrePlayerOne);
    hndButtonPlayerOne.disabled = true;
    hndButtonRestart.disabled = false;
    hndButtonPlayerTwo.disabled = false;
    partialPlayerOneValue = sort;
    turn--;
};

// função de sortear o dado 2
const sortDieTwo = () =>{
    let sort = Math.floor(Math.random()*side)+1;
    socrePlayerTwo.innerText = sort;
    outputPlayerTwo.appendChild(socrePlayerTwo);
    hndButtonPlayerOne.disabled = false;
    hndButtonPlayerTwo.disabled = true;
    partialPlayerTwoValue = sort
    turn--;
    partialResult(partialPlayerOneValue, partialPlayerTwoValue);
};

// função de reiniciar o jogo
const restart = () =>{
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
};

const newRund = () =>{
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
}

// função que compara os resultados parciais
const partialResult = (valueOne, valueTwo) =>{
    
    // Condição para saber a vitória ou empate 
    if(turn == 0){
        if(valueOne > valueTwo){
            if(rounds < 11){
                hndButtonRestart.disabled = true;
                hndButtonPlayerTwo.disabled = true;
                hndButtonPlayerOne.disabled = true;
                winer = 1
                setTimeout(()=>{
                    alert(`Jogador 1 venceu a rodada ${rounds}`);
                        if(rounds == 10){
                            finalResult();
                        }else{
                            newRund();
                        }
                },700);
                
            }
        }
        else if(valueOne < valueTwo){
            if(rounds < 11){
                hndButtonRestart.disabled = true;
                hndButtonPlayerTwo.disabled = true;
                hndButtonPlayerOne.disabled = true;
                winer = 2
                setTimeout(()=>{
                    alert(`Jogador 2 venceu a rodada ${rounds}`);
                        if(rounds == 10){
                            finalResult();
                        }else{
                            newRund();
                        }
                },700);
            }
            

        }
        else{
            if(rounds < 11){
                hndButtonRestart.disabled = true;
                hndButtonPlayerTwo.disabled = true;
                hndButtonPlayerOne.disabled = true;
                winer = 0
                setTimeout(()=>{
                    alert(`Ambos venceram a rodada ${rounds}`);
                        if(rounds == 10){
                            finalResult();
                        }else{
                            newRund();
                        }
                },700);
        }
        
    };

        // objeto que define os dados da rodada no array do resultado final
        const roudStats = {
            round:rounds,
            winer: winer,
            side_player_one:partialPlayerOneValue,
            side_player_two:partialPlayerTwoValue
        };
        // mandando o objeto para dentro do array
        scoreboard.push(roudStats);
    };
};
// função que compara o resultado total do jogo
const finalResult = () =>{
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
        alert(`Jogador 1 venceu o jogo com ${totalScorePlayerOne} rounds ganhos.`);
    } else if (totalScorePlayerOne < totalScorePlayerTwo) {
        alert(`Jogador 2 venceu o jogo com ${totalScorePlayerTwo} rounds ganhos.`);
    } else {
        alert(`O jogo terminou em empate com ${totalScorePlayerOne} rounds ganhos para cada jogador.`);
    }
    restart();
};
// Atribuindo as funções aos botões
hndButtonPlayerTwo.onclick = sortDieTwo;
hndButtonPlayerOne.onclick = sortDieOne;
hndButtonRestart.onclick = restart;