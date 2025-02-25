function funcao1(vetorNumerico1,valorInteiro1){
    let vetorResultado=[]
    for(let i=0;i<vetorNumerico1.length;i++){
        let resultado=(vetorNumerico1[i]*valorInteiro1)
        vetorResultado.push(resultado)
    }
    return vetorResultado
}
function funcao2(vetorNumerico2,valorInteiro2){
    let vetorResultado=[]
    if(valorInteiro2>5){
        for(let i=0;i<vetorNumerico2.length;i++){
            let resultado=(vetorNumerico2[i]*valorInteiro2)
            vetorResultado.push(resultado)
        }
        return vetorResultado
    }else{
        return 'Escreva um valor maior que 5!'
    }
    
}
console.log(funcao1([2,3,4],2))
console.log(funcao2([5,6,7],6))