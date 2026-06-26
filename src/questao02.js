import leia from 'readline-sync'

var idade = leia.questionFloat("Digite sua idade: ")
var estudante = leia.keyInSelect(["Sim", "Não"], + "Voce é estudante? ");
var diaSemana = leia.keyInSelect(["Domingo", "Segunda", "Terça", "qua", "qui", "sex", "sab"], "informe o dia da semana")

var valorIngresso = 40;

if("idade < 12"){
    console.log("Valor total: R$" + valorIngresso.toFixed(2));
    console.log("Valor desconto: R$" + (valorIngresso - 15).toFixed(2));
    console.log("Valor cobrado: R$" + (15).toFixed(2))
}else {
    if(diaSemana === 2) {
        var desconto = valorIngresso - (valorIngresso * 0.50)
        console.log("Valor total: R$" + valorIngresso.toFixed(2));
        console.log("Valor desconto: R$" + desconto.toFixed(2));
        console.log("Valor cobrado: R$" + (valorIngresso - desconto).toFixed(2))
    }else if(diaSemana !== 2 && estudante === true) {
        var desconto = valorIngresso - (valorIngresso * 0.30)
        console.log("Valor total: R$" + valorIngresso.toFixed(2));
        console.log("Valor desconto: R$" + desconto.toFixed(2));
        console.log("Valor cobrado: R$" + (valorIngresso - desconto).toFixed(2))
    }
}