function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    return capitalInicial*taxaJuros/100*tempoAplicacao //calculo de juros simples
}
console.log('Juros simples: ',jurosSimples(1000,10,12))

function jurosComposto(capitalInicial, taxaJuros, tempoAplicacao){
    return capitalInicial*(1+taxaJuros/100*tempoAplicacao)// calculo de juros composto
}
console.log('Juros composto: ',jurosComposto(1000,10,24).toFixed(2))