// While é usado para quando não houver uma quantidade determinada de vezes de repetições
function getInteiroAleatorio(min,max){
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}
let opcao = 0

while(opcao!=-1){ // irá realizar o código até a sentença seja falso
    opcao = getInteiroAleatorio(-1,10)
    console.log("numero: "+ opcao)
}
console.log("FIM")