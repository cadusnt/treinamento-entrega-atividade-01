import leia from 'readline-sync'

var valor = leia.questionFloat("Digite o valor da compra: ")
var estado = leia.keyInSelect(["sp", "pr", "sc", "am", "rs", "outro"], "informe o destino: ")

if(valor > 500){
    console.log("o valor da compra é" + valor.toFixed(2) + "e o frete é gratis");
}else {
    switch(estado){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            console.log("O VALOR DA COMPRA: r$" + valor.toFixed(2) + "frete R$" + 400);
        case 5:
            console.log("O VALOR DA COMPRA: r$" + valor.toFixed(2) + "frete R$" + 500);
            break;
    }      
}
