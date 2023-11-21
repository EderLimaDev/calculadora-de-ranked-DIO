
let rankedWins = calculateBalance(10, 10);
let rankedStatus = yourStatus();

function calculateBalance(wins, loses) {
    let balance = wins - loses
    return balance
} 

function yourStatus(){
    if(rankedWins <= 10) {
        nivel = "Ferro"
        console.log("O Herói tem de saldo " + rankedWins + " está no nível de " + nivel)
    } else if (rankedWins >= 11 && rankedWins <= 20) {
        nivel = "Bronze"
        console.log("O Herói tem de saldo " + rankedWins + " está no nível de " + nivel)
    } else if (rankedWins >= 21 && rankedWins <= 50) {
        nivel = "Prata"
        console.log("O Herói tem de saldo " + rankedWins + " está no nível de " + nivel)
    } else if (rankedWins >= 51 && rankedWins <= 80) {
        nivel = "Ouro"
        console.log("O Herói tem de saldo " + rankedWins + " está no nível de " + nivel)
    } else if (rankedWins >= 81 && rankedWins <= 90) {
        nivel = "Diamante"
        console.log("O Herói tem de saldo " + rankedWins + " está no nível de " + nivel)
    } else if (rankedWins >= 91 && rankedWins <= 100) {
        nivel = "Lendário"
        console.log("O Herói tem de saldo " + rankedWins + " está no nível de " + nivel)
    } else {
        nivel = "Imortal"
        console.log("O Herói tem de saldo " + rankedWins + " está no nível de " + nivel)
    }
}


