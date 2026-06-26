import leia from 'readline-sync'

var vitorias = leia.questionInt("Informe o numero de vitorias: ") * 3;
var empates = leia.questionInt("Informe numeri de empates: ") * 1;
var derrotas = leia.questionInt("Informe o numero de derrotas: ")

var pontuacao = (vitorias * 3) + (empates * 1) + (derrotas * 0);

if(pontuacao > 70) {
    console.log("Campeão!!!")
}else if(pontuacao < 45 && pontuacao < 70); {
    console.log("Classificado!")
} else {
    console.log("Rebaixado!")
}