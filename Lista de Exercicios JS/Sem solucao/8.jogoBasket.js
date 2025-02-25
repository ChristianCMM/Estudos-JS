function pontuacao(cestas){
    let recordes=[]// array com os recordes
    let menorPonto=0//qual o menor valor da pontuação
    let resultadoFinal=[]
    let maioresPontos=0// quantidade de jogos com recordes
    let arrayPontos=cestas.split(',')
    let ponto=0
    
    for(let i=1;i<arrayPontos.length;i++){
        if(arrayPontos[i]>Math.max(...recordes)){/*compara o valor atual com o maior valor da array "recordes" */
            recordes.push(arrayPontos[i])
            maioresPontos++// quantidade de jogos com recordes
        }
        ponto=arrayPontos.indexOf(Math.min(arrayPontos))

        
    }

    
    resultadoFinal.push(maioresPontos-1,ponto)
    return resultadoFinal
}
console.log(pontuacao('3,5,6,7,4,1,5' ))

// resposta

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))