import leia from 'readline-sync'

var kwgasto = leia.questionFloat("INFORME KWH GASTO: ");
var temTS = leia.keyInYN("TEM TARIFA SOCIAL? ");
var valorPagar = 0;

if(kwgasto <= 100) {
    valorPagar = kwgasto * 0.60
} else if(kwgasto > 100 && kwgasto <= 300) {
    valorPagar = kwgasto * 0.75;
} else {
    valorPagar = kwgasto * 0.90;
}

var valorFinal = (temTS === true) ? valorPagar - (valorPagar * 0.20) : valorPagar;
console.log("valor final a pargar: R$" + valorFinal);