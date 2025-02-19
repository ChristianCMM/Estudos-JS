// While é usado para quando não houver uma quantidade determinada de vezes de repetições
function getInteiroAleatorio(min,max){
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}
let opcao // em DO/WHILE não é necessário dar um valor para a variavel, apenas inicializa-la 

do { // DO/WHILE serve para executar, pelo menos, 1 vez o código
    opcao = getInteiroAleatorio(-1,10)
    console.log("numero: "+ opcao)
}while(opcao!=-1)// irá realizar o código até a sentença seja falso

console.log("FIM")