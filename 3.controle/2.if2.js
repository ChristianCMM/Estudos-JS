function teste1(num){
    if(num>7) /*estrutura IF, não necessita de {}(CHAVES), mas só 
        1 sentença ficará asociada ao bloco IF */
        console.log(num)
    console.log('Final')// sempre será executado, ja que está fora do bloco IF
}
teste1(6)// executa apenas o "final", pois não executa o IF
teste1(8)// executa todo o código
console.log("----------------------------")
function teste2(num){
    if (num>7);{ /*apresenta ambos os numeros, pois o IF está VAZIO, 
        por conta do ";" */
        console.log(num)
    }
}
teste2(6)
teste2(8)