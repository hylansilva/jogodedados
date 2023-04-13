// Buscando todos os elementos que vamos usar no HTML
const btnPlayerOne = document.getElementById("btn-player-one")
const btnRestart = document.getElementById("btn-restart")
const btnPlayerTwo = document.getElementById("btn-player-two")
const rounds = document.getElementById("rounds")

// Criando as variáveis para armazenar cada valor dos sorteios
let amountPlayerOne = 0
let amountPlayerTwo = 0

// Desabilitando os botões do Jogador 2 e o de Reiniciar
btnPlayerTwo.disabled = true
btnRestart.disabled = true

// Iniciando a variável de total de rodadas 
let totalRounds = 10

// Definindo a quantidade de valores que podem ser sorteados
const side = 6

// Inserindo no HTML a quantidade de rounds restantes
rounds.innerHTML = totalRounds

    // Função de sortear o dado 1
    const sortDieOne = () =>{
        let sort = Math.floor(Math.random()*side)+1
        totalRounds--
        rounds.innerHTML = totalRounds
        btnRestart.disabled = false
        amountPlayerOne = amountPlayerOne + sort
        if(totalRounds > 0){
            btnPlayerTwo.disabled = false
            btnPlayerOne.disabled = true
        }else{
            btnPlayerTwo.disabled = true
            btnPlayerOne.disabled = true
        }
    }

    // Função de sortear o dado 2
    const sortDieTwo = () =>{
        let sort = Math.floor(Math.random()*side)+1
        totalRounds--
        rounds.innerHTML = totalRounds
        amountPlayerTwo = amountPlayerTwo + sort
        if(totalRounds > 0){
            btnPlayerTwo.disabled = true
            btnPlayerOne.disabled = false

        }else{
            btnPlayerTwo.disabled = true
            btnPlayerOne.disabled = true
            winner()
        }
    }

    // Função para reiniciar o jogo
    const restart = () =>{
        totalRounds = 10
        rounds.innerHTML = totalRounds
        btnPlayerTwo.disabled = true
        btnPlayerOne.disabled = false
        btnRestart.disabled = true
    }

    // Função para declarar o vencedor
    const winner = () =>{
        if(totalRounds == 0){
            if(amountPlayerOne > amountPlayerTwo){
                // Zerando os valores dos jogadores
                amountPlayerOne = 0
                amountPlayerTwo = 0
                alert('Vençeu 1')
            }else if(amountPlayerOne < amountPlayerTwo){
                // Zerando os valores dos jogadores
                amountPlayerOne = 0
                amountPlayerTwo = 0
                alert('Vençeu 2')
            }else{
                // Zerando os valores dos jogadores
                amountPlayerOne = 0 
                amountPlayerTwo = 0
                alert('Vençeu Todos')
            }
        }
    }
    
    

// Atribuindo cada função para o seu botão em especifico
btnPlayerOne.onclick = sortDieOne
btnPlayerTwo.onclick = sortDieTwo
btnRestart.onclick = restart
