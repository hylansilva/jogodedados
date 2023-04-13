// definindo as voariaveis do jogo 
let scoreboard = []; // criando um array para salvar os dados dos jogadores
const rounds = 10; // criando a quantidade de rounds 
let turne = 2; // definindo quantos turnos haverão no jogo
const side = 6; // definindo até qual tamanho deve ser o sorteido dos valores
let partialPlayerOneValue;
let partialPlayerTwoValue;

// Buscando o elemento body do html-
const body = document.getElementsByTagName(HTMLBodyElement);

// criando a div principal do jogo que mostra os dados
const main = document.createElement("div");
main.className = "pronpt";
document.body.appendChild(main);

// criando os lados dos dois dados 
// lado 1
const outputPlayerOne = document.createElement("div");
const socrePlayerOne = document.createElement("p");
socrePlayerOne.innerText = "";
outputPlayerOne.className = "player-one";
main.appendChild(outputPlayerOne);
// lado 2
const outputPlayerTwo = document.createElement("div");
const socrePlayerTwo = document.createElement("p");
socrePlayerTwo.innerText = "";
outputPlayerTwo.className = "player-two";
main.appendChild(outputPlayerTwo);

// criando os botões do jogo
// botão do player 1
const hndButtonPlayerOne = document.createElement("button");
hndButtonPlayerOne.innerText = "Jogador 1";


// botão de reiniciar
const hndButtonRestart = document.createElement("button");
hndButtonRestart.innerText = "Reinicar o Jogo";


// botão do player 2
const hndButtonPlayerTwo = document.createElement("button");
hndButtonPlayerTwo.innerText = "Jogador 2";

// criando a div que adiciona os botões em um unico form
const control = document.createElement("div");
control.id = "control";
control.appendChild(hndButtonPlayerOne);
control.appendChild(hndButtonRestart);
control.appendChild(hndButtonPlayerTwo);
document.body.appendChild(control);

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
    turne--;
    partialResult(partialPlayerOneValue, partialPlayerTwoValue);
};

// função de sortear o dado 2
const sortDieTwo = () =>{
    let sort = Math.floor(Math.random()*side)+1;
    socrePlayerTwo.innerText = sort;
    outputPlayerTwo.appendChild(socrePlayerTwo);
    hndButtonPlayerOne.disabled = false;
    hndButtonPlayerTwo.disabled = true;
    partialPlayerTwoValue = sort
    turne--;
    partialResult(partialPlayerOneValue, partialPlayerTwoValue);
};

// função de reiniciar o jogo
const restart = () =>{
    socrePlayerOne.innerText = "";
    socrePlayerTwo.innerText = "";
    hndButtonRestart.disabled = true;
    hndButtonPlayerTwo.disabled = true;
    hndButtonPlayerOne.disabled = false;
    partialPlayerOneValue = 0;
    partialPlayerTwoValue = 0;
    turne = 2;
};

// função que compara os resultados parciais
const partialResult = (valueOne, valueTwo) =>{
    if(turne == 0){
        if(valueOne > valueTwo){
            hndButtonRestart.disabled = true;
            hndButtonPlayerTwo.disabled = true;
            hndButtonPlayerOne.disabled = true;
            setTimeout(()=>{
                alert('Jogador 1 venceu');
                restart();
            },700);
        }else if(valueOne < valueTwo){
            hndButtonRestart.disabled = true;
            hndButtonPlayerTwo.disabled = true;
            hndButtonPlayerOne.disabled = true;
            setTimeout(()=>{
                alert('Jogador 2 venceu');
                restart();
            },700);
        }else{
            hndButtonRestart.disabled = true;
            hndButtonPlayerTwo.disabled = true;
            hndButtonPlayerOne.disabled = true;
            setTimeout(()=>{
                alert('Houve um Empate');
                restart();
            },700);
        }
    }
};

// função

// Atribuindo as funções aos botões
hndButtonPlayerTwo.onclick = sortDieTwo;
hndButtonPlayerOne.onclick = sortDieOne;
hndButtonRestart.onclick = restart;